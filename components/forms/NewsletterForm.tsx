'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import FormMessage from '@/components/ui/FormMessage';
import { submitNewsletter, type FormStatus } from '@/lib/form-status';
import { newsletterSchema } from '@/lib/validation';

interface NewsletterFormProps {
  variant?: 'dark' | 'light';
  submitLabel?: string;
  successMessage?: string;
}

export default function NewsletterForm({
  variant = 'dark',
  submitLabel = 'Subscribe',
  successMessage = "Thanks for subscribing! We'll keep you updated.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  const isLight = variant === 'light';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const result = newsletterSchema.safeParse({ email, consent });
    if (!result.success) {
      setError(result.error.errors[0]?.message || 'Please check your details');
      return;
    }

    setStatus('submitting');
    try {
      await submitNewsletter(result.data);
      setStatus('success');
      setEmail('');
      setConsent(false);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputClasses = isLight
    ? 'flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none'
    : 'flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none';

  const consentClasses = isLight
    ? 'flex items-start gap-2 text-sm text-gray-600 cursor-pointer'
    : 'flex items-start gap-2 text-sm text-gray-400 cursor-pointer';

  const checkboxClasses = isLight
    ? 'mt-0.5 rounded border-gray-300 text-brand-coral focus:ring-brand-coral'
    : 'mt-0.5 rounded border-gray-600 text-brand-coral focus:ring-brand-coral';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' && (
        <FormMessage status="success" message={successMessage} />
      )}
      {status === 'error' && error && <FormMessage status="error" message={error} />}

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={inputClasses}
        />
        <Button type="submit" disabled={status === 'submitting'} className="shrink-0">
          {status === 'submitting' ? 'Submitting…' : submitLabel}
        </Button>
      </div>

      <label className={consentClasses}>
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className={checkboxClasses}
        />
        I agree to receive anygym updates and marketing emails. I can unsubscribe at any time.
      </label>
    </form>
  );
}
