import Link from "next/link";

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Case study", path: "/case-study" },
  { name: "About us", path: "/about" },
];

const NavLinks = () => {
  return (
    <div className="flex items-center gap-8">
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
