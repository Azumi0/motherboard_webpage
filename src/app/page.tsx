import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { WhyUs } from '@/components/WhyUs';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <TechStack />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
