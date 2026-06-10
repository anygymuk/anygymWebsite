import NewsletterForm from '@/components/forms/NewsletterForm';
import DeviceMockup from '@/components/ui/DeviceMockup';
import { HERO_APP_SCREENSHOTS } from '@/lib/constants';

const features = [
  {
    title: 'Single gym membership',
    description: 'One subscription gives you access to every gym in the anygym network across the UK.',
  },
  {
    title: 'Flexible membership',
    description: 'Choose a tier that matches how often you train — upgrade or change anytime.',
  },
  {
    title: 'The anygym app',
    description: 'Manage passes, discover gyms on the map, and check in — all from your phone.',
  },
];

export default function MembersSection() {
  return (
    <section id="members" className="py-20 lg:py-28 bg-gray-50">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-coral">
              For gym members
            </p>
            <h2 className="mt-2 section-heading">Train anywhere in the network</h2>
            <p className="section-subheading">
              Stop juggling multiple memberships. With anygym, one plan unlocks thousands of partner gyms.
            </p>

            <ul className="mt-8 space-y-6">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Join the waitlist</h3>
              <p className="mt-2 text-sm text-gray-600">
                Be first to know when anygym launches in your area. We&apos;ll email you when
                memberships go live.
              </p>
              <div className="mt-4">
                <NewsletterForm
                  variant="light"
                  submitLabel="Join waitlist"
                  successMessage="You're on the list! We'll be in touch when anygym launches."
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <DeviceMockup
              screenshots={[...HERO_APP_SCREENSHOTS]}
              alt="anygym member app"
              showBezel={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
