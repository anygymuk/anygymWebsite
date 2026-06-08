import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  dark?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, dark, id, className = '', ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div>
        <label
          htmlFor={textareaId}
          className={`block text-sm font-medium mb-1 ${dark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          className={`block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none transition-colors resize-y ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
