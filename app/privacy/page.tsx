import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'anygym privacy policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: June 2026</p>

        <div className="mt-8 prose prose-gray max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Who we are</h2>
            <p>
              anygym (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the anygym universal gym
              membership platform. You can contact us at{' '}
              <a href="mailto:contact@any-gym.com" className="text-brand-coral">
                contact@any-gym.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Information we collect</h2>
            <p>We may collect the following information when you use our website or services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact details (name, email address, phone number) submitted via forms</li>
              <li>Newsletter subscription preferences</li>
              <li>Gym group partnership enquiries and investor enquiries</li>
              <li>Technical data such as IP address and browser type (via standard web logs)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">How we use your information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to enquiries and partnership requests</li>
              <li>To send newsletters and product updates (with your consent)</li>
              <li>To send investor materials you have requested</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Your rights</h2>
            <p>
              Under UK GDPR, you have the right to access, correct, or delete your personal data,
              and to withdraw consent for marketing communications at any time. Contact us at{' '}
              <a href="mailto:contact@any-gym.com" className="text-brand-coral">
                contact@any-gym.com
              </a>{' '}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
            <p>
              This marketing website uses minimal cookies. Our member application at app.any-gym.com
              may use additional cookies for authentication and functionality.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
