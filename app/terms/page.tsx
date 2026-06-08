import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'anygym terms of service for use of our website and marketing communications.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="section-container py-6">
          <Link href="/" className="text-sm font-medium text-brand-coral hover:text-brand-coral-hover">
            &larr; Back to home
          </Link>
        </div>
      </header>

      <article className="section-container py-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: June 2026</p>

        <div className="mt-8 prose prose-gray max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Acceptance of terms</h2>
            <p>
              By accessing www.any-gym.com, you agree to these terms of service. If you do not
              agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Use of the website</h2>
            <p>
              This website provides information about anygym&apos;s universal gym membership
              service. Membership subscriptions, passes, and account management are handled through
              our member application at{' '}
              <a href="https://app.any-gym.com" className="text-brand-coral">
                app.any-gym.com
              </a>
              , which is subject to separate terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Enquiries and communications</h2>
            <p>
              Information submitted through our forms (newsletter, gym group interest, investor
              enquiries) must be accurate. We reserve the right to decline partnership or respond
              to enquiries at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Intellectual property</h2>
            <p>
              All content on this website, including logos, text, and images, is owned by anygym and
              may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:contact@any-gym.com" className="text-brand-coral">
                contact@any-gym.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
