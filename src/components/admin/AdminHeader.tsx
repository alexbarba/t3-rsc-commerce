import { Logo } from "@components/common";

const Header = () => {
  return (
    <header className="grid-4 flex h-16 items-center justify-between bg-slate-600 p-4 shadow-md sm:px-8">
      <Logo className="aspect-square w-10 rounded-full bg-white object-cover p-1" />
    </header>
  );
};

export default Header;
