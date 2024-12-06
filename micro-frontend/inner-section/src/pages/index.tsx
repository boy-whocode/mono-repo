import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Insignt from "@/components/Insignt";
import OptionChain from "@/components/OptionChain";
import PricingPlan from "@/components/PricingPlan";
import Screener from "@/components/Screener";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      {/* Banner */}
      <Banner />
      {/* Insignt */}
      <Insignt />
      {/* Screener */}
      <Screener />
      {/* Option chain */}
      <OptionChain />
      {/* Testimonial */}
      <Testimonial />
      {/* Pricing Plan */}
      <PricingPlan />
      {/* FAQ */}
      <FAQ />
    </main>
  );
}
