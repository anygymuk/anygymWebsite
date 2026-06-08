import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import GymGroupsSection from '@/components/sections/GymGroupsSection';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import InvestorsSection from '@/components/sections/InvestorsSection';
import MembersSection from '@/components/sections/MembersSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <MembersSection />
        <GymGroupsSection />
        <InvestorsSection />
      </main>
      <Footer />
    </>
  );
}
