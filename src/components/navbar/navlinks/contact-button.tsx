import Link from "next/link";

interface ContactButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const ContactButton = ({ 
  className = "", 
  href = "/contact", 
  children = "Contact" 
}: ContactButtonProps) => {
  return (
    <Link
      href={href}
      className={`bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ContactButton;
