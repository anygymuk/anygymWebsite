'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import FormMessage from '@/components/ui/FormMessage';
import { submitNetlifyForm, type FormStatus } from '@/lib/netlify-form';
import { newsletterSchema } from '@/lib/validation';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

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
      await submitNetlifyForm('newsletter', {
        email: result.data.email,
        consent: 'yes',
      });
      setStatus('success');
      setEmail('');
      setConsent(false);
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {status === 'success' && (
        <FormMessage status="success" message="Thanks for subscribing! We'll keep you updated." />
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
          className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none"
        />
        <Button type="submit" disabled={status === 'submitting'} className="shrink-0">
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-400 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 rounded border-gray-600 text-brand-coral focus:ring-brand-coral"
        />
        I agree to receive anygym updates and marketing emails. I can unsubscribe at any time.
      </label>
    </form>
  );
}
