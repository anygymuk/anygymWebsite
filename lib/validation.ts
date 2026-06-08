import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to receive updates' }),
  }),
});

export const gymGroupSchema = z.object({
  contactName: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid work email'),
  companyName: z.string().min(2, 'Please enter your company name'),
  locations: z.string().min(1, 'Please select number of locations'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export const investorSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  investmentRange: z.string().optional(),
  message: z.string().optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type GymGroupFormData = z.infer<typeof gymGroupSchema>;
export type InvestorFormData = z.infer<typeof investorSchema>;
