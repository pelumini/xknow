import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image height={50} width={50} alt="logo" src="/logo.svg" />
      <h1 className="font-bold text-xl">xKnow</h1>
    </div>
  );
};
