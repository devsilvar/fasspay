import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <Header />
      </div>
      <FeaturesSection />
    </>
  );
}
