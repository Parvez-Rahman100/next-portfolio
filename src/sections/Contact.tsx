import Button from "@/components/Button";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m looking for new opportunity. My inbox always open. I am looking
        forward to join a job as junior web developer.
      </p>
      <div className="contact-action">
        <Button text="Say Hello" link="mailto:iamparvezrahman@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
