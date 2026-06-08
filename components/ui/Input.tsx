import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  dark?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, dark, id, className = '', ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div>
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium mb-1 ${dark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {label}
          {props.required && <span className="text-brand-coral ml-0.5">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none transition-colors ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
