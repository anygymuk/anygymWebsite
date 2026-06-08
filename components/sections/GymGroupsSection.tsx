import BrowserMockup from '@/components/ui/BrowserMockup';
import GymGroupForm from '@/components/forms/GymGroupForm';

const benefits = [
  {
    title: 'Earn more',
    description: 'Capture revenue from anygym members who would otherwise train at a competitor.',
  },
  {
    title: 'Maximise capacity',
    description: 'Fill off-peak slots and classes by opening your doors to the anygym network.',
  },
  {
    title: 'Manage your gyms',
    description: 'Control locations, monitor revenue, and manage members from the anygym admin portal.',
  },
];

export default function GymGroupsSection() {
  return (
    <section id="gym-groups" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-coral">
            For gym groups
          </p>
          <h2 className="mt-2 section-heading">Grow your business with anygym</h2>
          <p className="section-subheading mx-auto">
            Partner with anygym to reach new members, increase utilisation, and manage everything from one platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <BrowserMockup
            src="/screenshots/admin-dashboard.svg"
            alt="anygym admin dashboard"
            title="dashboard"
          />
          <BrowserMockup
            src="/screenshots/admin-gyms.svg"
            alt="anygym gym management"
            title="gyms"
          />
          <BrowserMockup
            src="/screenshots/admin-revenue.svg"
            alt="anygym revenue analytics"
            title="revenue"
          />
        </div>

        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 text-center">
              Register your interest
            </h3>
            <p className="mt-2 text-center text-sm text-gray-600">
              Tell us about your gym group and we&apos;ll be in touch to discuss partnership.
            </p>
            <div className="mt-6">
              <GymGroupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
