export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export async function submitNetlifyForm(
  formName: string,
  data: Record<string, string>
): Promise<void> {
  const body = new URLSearchParams({
    'form-name': formName,
    ...data,
  });

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }
}
