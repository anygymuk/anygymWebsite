const steps = [
  {
    number: '01',
    title: 'Choose your plan',
    description: 'Pick a membership tier that fits your training needs — from casual visits to unlimited access.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
  },
  {
    number: '02',
    title: 'Find a gym on the map',
    description: 'Search the anygym network by location, facilities, and availability near you.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    number: '03',
    title: 'Generate your pass',
    description: 'Create a digital gym pass in the app — ready to show at reception when you arrive.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
    ),
  },
  {
    number: '04',
    title: 'Check in and train',
    description: 'Walk in, check in with your pass, and enjoy your workout at any partner gym.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">How it works</h2>
          <p className="section-subheading mx-auto">
            Getting started with anygym takes minutes. Here&apos;s how members access gyms across the UK.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center lg:text-left">
              <div className="mx-auto lg:mx-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {step.icon}
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-coral">
                Step {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
