import Button from '@/components/ui/Button';
import DeviceMockup from '@/components/ui/DeviceMockup';
import { APP_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-red-50" />
      <div className="absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-gradient opacity-10 blur-3xl" />

      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-brand-gradient/10 px-4 py-1.5 text-sm font-medium text-brand-coral">
              Universal gym membership
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              One gym membership,{' '}
              <span className="text-brand-gradient">anygym</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-xl">
              Access thousands of gyms across the UK with a single subscription.
              Find gyms, generate passes, and train anywhere in the network.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={APP_URL}>Get started</Button>
              <Button href="#gym-groups" variant="outline">
                Partner with us
              </Button>
            </div>
          </div>

          <DeviceMockup
            screenshots={[
              '/screenshots/anygym-home.png',
              '/screenshots/search-screen.png',
              '/screenshots/standard-model.png',
            ]}
            alt="anygym app"
          />
        </div>
      </div>
    </section>
  );
}
