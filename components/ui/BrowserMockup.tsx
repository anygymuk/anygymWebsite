interface BrowserMockupProps {
  src: string;
  alt: string;
}

export default function BrowserMockup({ src, alt }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
      </div>
      <div className="bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
    </div>
  );
}
