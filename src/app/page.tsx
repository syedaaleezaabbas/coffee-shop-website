import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Menu from "@/components/Menu"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Contact />
    </div>
  );
}
