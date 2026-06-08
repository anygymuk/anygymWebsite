type Status = 'success' | 'error';

interface FormMessageProps {
  status: Status;
  message: string;
}

export default function FormMessage({ status, message }: FormMessageProps) {
  const styles =
    status === 'success'
      ? 'bg-green-50 text-green-800 border-green-200'
      : 'bg-red-50 text-red-800 border-red-200';

  return (
    <div className={`rounded-lg border px-4 py-3 text-sm ${styles}`} role="alert">
      {message}
    </div>
  );
}
