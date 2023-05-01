import Link from "next/link";

const Email = () => {
  return (
    <div className="email">
      <Link href="mailto:iamparvezrahman@gmail.com" className="email-link">
        iamparvezrahman@gmail.com
      </Link>
    </div>
  );
};

export default Email;
