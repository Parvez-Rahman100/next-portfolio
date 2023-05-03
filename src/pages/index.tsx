import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";

const Index = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
