import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/thlogo.png"
        alt="Tech Hertz"
        width={40}
        height={40}
      />
      <span className="font-bold text-lg">
        <span className="text-blue-500">Tech</span> Hertz
      </span>
    </div>
  );
};

export default Logo;
