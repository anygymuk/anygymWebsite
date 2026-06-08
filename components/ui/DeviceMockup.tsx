'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface DeviceMockupProps {
  screenshots: string[];
  alt: string;
  interval?: number;
  /** Full device screenshots (e.g. Cloudinary) — skip the local iPhone bezel overlay */
  showBezel?: boolean;
}

export default function DeviceMockup({
  screenshots,
  alt,
  interval = 4000,
  showBezel = true,
}: DeviceMockupProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (screenshots.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % screenshots.length);
    }, interval);
    return () => clearInterval(timer);
  }, [screenshots.length, interval]);

  const screenInset = showBezel ? 'inset-[8%]' : 'inset-0';
  const screenRadius = showBezel ? 'rounded-[2rem]' : 'rounded-[2.5rem]';

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
      <div
        className={`relative aspect-[9/19] bg-gray-100 ${
          !showBezel ? 'overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/10' : ''
        }`}
      >
        {screenshots.map((src, i) => (
          <div
            key={src}
            className={`absolute ${screenInset} ${screenRadius} ${
              i === activeIndex ? 'visible z-10' : 'invisible z-0'
            }`}
            aria-hidden={i !== activeIndex}
          >
            <Image
              src={src}
              alt={`${alt} screen ${i + 1}`}
              width={694}
              height={1468}
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 640px) 280px, 320px"
              priority={i === 0}
            />
          </div>
        ))}
        {showBezel && (
          <Image
            src="/screenshots/iphone-bezel.png"
            alt=""
            fill
            className="pointer-events-none z-20 object-contain"
            sizes="(max-width: 640px) 280px, 320px"
            priority
          />
        )}
      </div>
      {screenshots.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show screen ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? 'w-6 bg-brand-coral' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
