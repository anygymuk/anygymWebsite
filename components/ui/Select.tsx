import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  dark?: boolean;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, dark, options, id, className = '', ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div>
        <label
          htmlFor={selectId}
          className={`block text-sm font-medium mb-1 ${dark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {label}
          {props.required && <span className="text-brand-coral ml-0.5">*</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none transition-colors bg-white ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
