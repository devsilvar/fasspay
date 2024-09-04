import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import AssuranceSection from "@/components/sections/AssuranceSection";
import ExplanationSection from "@/components/sections/PayCodePaymentExplained";
import ProtectSection from "@/components/sections/ProtectSection";
import CustomersSay from "@/components/sections/CustomersSay";
import FAQs from "@/components/sections/FAQs";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <Header />
      </div>
      <FeaturesSection />
      <AssuranceSection />
      <ExplanationSection />
      <ProtectSection />
      <CustomersSay />
      <FAQs />
    </>
  );
}
