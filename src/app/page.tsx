import Hero from "@/components/Hero";
import About from "@/components/About"
import Menu from "@/components/Menu"
import Blogs from "@/components/Blogs"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Blogs />
      <Contact />
    </div>
  );
}
