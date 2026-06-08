'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import FormMessage from '@/components/ui/FormMessage';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import { INVESTMENT_OPTIONS } from '@/lib/constants';
import { submitInvestor, type FormStatus } from '@/lib/form-status';
import { investorSchema } from '@/lib/validation';

export default function InvestorForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    investmentRange: '',
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

    const result = investorSchema.safeParse(form);
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
      await submitInvestor(result.data);
      setStatus('success');
      setForm({
        fullName: '',
        email: '',
        company: '',
        investmentRange: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrors({
        _form: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' && (
        <FormMessage
          status="success"
          message="Thank you! Check your email for the anygym investor pack."
        />
      )}
      {(status === 'error' || errors._form) && (
        <FormMessage
          status="error"
          message={errors._form || 'Something went wrong. Please try again.'}
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Full name"
          name="fullName"
          dark
          value={form.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
          error={errors.fullName}
          required
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          dark
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          error={errors.email}
          required
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Company / fund"
          name="company"
          dark
          value={form.company}
          onChange={(e) => updateField('company', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
        <Select
          label="Investment range"
          name="investmentRange"
          dark
          value={form.investmentRange}
          onChange={(e) => updateField('investmentRange', e.target.value)}
          options={INVESTMENT_OPTIONS}
          className="bg-gray-700 border-gray-600 text-white"
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        dark
        value={form.message}
        onChange={(e) => updateField('message', e.target.value)}
        placeholder="Any questions or context…"
        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
      />

      <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Request investor pack'}
      </Button>
    </form>
  );
}
