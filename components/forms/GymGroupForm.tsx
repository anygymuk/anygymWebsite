'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import FormMessage from '@/components/ui/FormMessage';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import { LOCATION_OPTIONS } from '@/lib/constants';
import { submitNetlifyForm, type FormStatus } from '@/lib/netlify-form';
import { gymGroupSchema } from '@/lib/validation';

export default function GymGroupForm() {
  const [form, setForm] = useState({
    contactName: '',
    email: '',
    companyName: '',
    locations: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const result = gymGroupSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('submitting');
    try {
      await submitNetlifyForm('gym-group', {
        contactName: result.data.contactName,
        email: result.data.email,
        companyName: result.data.companyName,
        locations: result.data.locations,
        phone: result.data.phone || '',
        message: result.data.message || '',
      });
      setStatus('success');
      setForm({
        contactName: '',
        email: '',
        companyName: '',
        locations: '',
        phone: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      name="gym-group"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="gym-group" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {status === 'success' && (
        <FormMessage
          status="success"
          message="Thank you! We'll be in touch shortly to discuss partnership."
        />
      )}
      {status === 'error' && (
        <FormMessage status="error" message="Something went wrong. Please try again." />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Contact name"
          name="contactName"
          value={form.contactName}
          onChange={(e) => updateField('contactName', e.target.value)}
          error={errors.contactName}
          required
        />
        <Input
          label="Work email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <Input
        label="Company / gym group name"
        name="companyName"
        value={form.companyName}
        onChange={(e) => updateField('companyName', e.target.value)}
        error={errors.companyName}
        required
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          label="Number of locations"
          name="locations"
          value={form.locations}
          onChange={(e) => updateField('locations', e.target.value)}
          error={errors.locations}
          required
          options={[{ value: '', label: 'Select…' }, ...LOCATION_OPTIONS]}
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => updateField('phone', e.target.value)}
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={(e) => updateField('message', e.target.value)}
        placeholder="Tell us about your gym group…"
      />

      <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? 'Submitting…' : 'Register interest'}
      </Button>
    </form>
  );
}
