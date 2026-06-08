interface BrowserMockupProps {
  src: string;
  alt: string;
  title?: string;
}

export default function BrowserMockup({ src, alt, title }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-500 truncate">
          admin.any-gym.com{title ? ` / ${title}` : ''}
        </div>
      </div>
      <div className="aspect-[16/10] bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}
