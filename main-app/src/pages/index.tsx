import dynamic from "next/dynamic";

const Header = dynamic(() => import("header/Header"), { ssr: false });
const InnerSection = dynamic(() => import("innerSection/InnerSection"), { ssr: false });
const Footer = dynamic(() => import("footer/Footer"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <InnerSection />
      </main>
      <Footer />
    </div>
  );
}
