import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { CONTACT_EMAIL } from '@/lib/constants';

const footerLinks = [
  { href: 'https://app.any-gym.com', label: 'Member app', external: true },
  { href: '#gym-groups', label: 'Gym groups' },
  { href: '#investors', label: 'Investors' },
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/terms', label: 'Terms of service' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="border-b border-gray-800">
        <div className="section-container py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Stay in the loop
              </h2>
              <p className="mt-3 text-gray-400">
                Get updates on anygym launches, new gyms joining the network, and product news.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/logos/anygym-white.svg"
              alt="anygym"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Universal gym membership for the UK. One subscription, thousands of gyms.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm text-brand-coral hover:text-brand-coral-hover"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith('#') ? (
                <a key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} anygym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
