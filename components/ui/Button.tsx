import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-coral text-white hover:bg-brand-coral-hover shadow-sm',
  secondary:
    'bg-gray-900 text-white hover:bg-gray-800 shadow-sm',
  outline:
    'border-2 border-gray-300 text-gray-700 hover:border-brand-coral hover:text-brand-coral bg-white',
};

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
