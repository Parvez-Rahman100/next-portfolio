import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Hi Myself</h1>
      <h2 className="hero-title-large">Parvez Rahman</h2>
      <h3 className="hero-title-large hero-title-sub">
        My line of work for web
      </h3>
      <p className="hero-text">
        I&apos;m a web developer with expertise in creating top-notch digital
        experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at any IT
        firms.
      </p>
      <div className="hero-button">
        <Button text="Check Out My Projects" link="#" />
      </div>
    </div>
  );
};

export default Hero;
