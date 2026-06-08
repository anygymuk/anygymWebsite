import InvestorForm from '@/components/forms/InvestorForm';

const pillars = [
  {
    title: 'Market opportunity',
    description:
      'The UK fitness market is fragmented across thousands of independent and chain gyms. anygym unifies access for consumers while creating a new distribution channel for operators.',
  },
  {
    title: 'Product & platform',
    description:
      'A consumer app for discovery, passes, and check-in — paired with an admin portal for gym groups to manage locations, revenue, and member activity.',
  },
  {
    title: 'Business model',
    description:
      'Recurring subscription revenue from members, with revenue share to gym partners. Network effects grow as more gyms and members join the platform.',
  },
  {
    title: 'Vision',
    description:
      'Become the default way people access fitness in the UK — one membership, every gym. Building the infrastructure layer for the fitness economy.',
  },
];

export default function InvestorsSection() {
  return (
    <section id="investors" className="py-20 lg:py-28 bg-gray-900 text-white">
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            For investors
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Invest in the future of fitness access
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            anygym is building the universal gym membership for the UK. Request our investor pack to learn more.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gray-700 bg-gray-800 p-8">
            <h3 className="text-xl font-bold text-white text-center">
              Request the investor pack
            </h3>
            <p className="mt-2 text-center text-sm text-gray-400">
              Leave your details and we&apos;ll send you our investor pack by email.
            </p>
            <div className="mt-6">
              <InvestorForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
