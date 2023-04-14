import Logo from "@/components/logo";
import Link from "next/link";

const Navbar = () => {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="https://www.facebook.com/parvez.rahman.144">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link className="nav-items-list-item-link" href={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
