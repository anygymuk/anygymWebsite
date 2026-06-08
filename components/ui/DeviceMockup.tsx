'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface DeviceMockupProps {
  screenshots: string[];
  alt: string;
  interval?: number;
}

export default function DeviceMockup({
  screenshots,
  alt,
  interval = 4000,
}: DeviceMockupProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (screenshots.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % screenshots.length);
    }, interval);
    return () => clearInterval(timer);
  }, [screenshots.length, interval]);

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
      <div className="relative aspect-[9/19]">
        {screenshots.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-[8%] overflow-hidden rounded-[2rem] transition-opacity duration-700 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`${alt} screen ${i + 1}`}
              fill
              className="object-cover object-top"
              sizes="320px"
              priority={i === 0}
            />
          </div>
        ))}
        <Image
          src="/screenshots/iphone-bezel.png"
          alt=""
          fill
          className="pointer-events-none object-contain"
          sizes="320px"
          priority
        />
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
