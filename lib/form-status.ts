import type { GymGroupFormData, InvestorFormData, NewsletterFormData } from './validation';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export type FormSubmitResponse = {
  success: true;
  emailSent?: boolean;
  saved?: boolean;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.any-gym.com';

export const LEADS_ENDPOINTS = {
  newsletter: `${API_BASE}/leads/newsletter`,
  gymGroup: `${API_BASE}/leads/gym-group`,
  investor: `${API_BASE}/leads/investor`,
} as const;

export async function submitForm(
  url: string,
  data: unknown
): Promise<FormSubmitResponse> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.error ?? 'Something went wrong');
  }

  return body as FormSubmitResponse;
}

export function submitNewsletter(data: NewsletterFormData) {
  return submitForm(LEADS_ENDPOINTS.newsletter, data);
}

export function submitGymGroup(data: GymGroupFormData) {
  return submitForm(LEADS_ENDPOINTS.gymGroup, {
    contactName: data.contactName,
    email: data.email,
    companyName: data.companyName,
    locations: data.locations,
    ...(data.phone ? { phone: data.phone } : {}),
    ...(data.message ? { message: data.message } : {}),
  });
}

export function submitInvestor(data: InvestorFormData) {
  return submitForm(LEADS_ENDPOINTS.investor, {
    fullName: data.fullName,
    email: data.email,
    ...(data.company ? { company: data.company } : {}),
    ...(data.investmentRange ? { investmentRange: data.investmentRange } : {}),
    ...(data.message ? { message: data.message } : {}),
  });
}
