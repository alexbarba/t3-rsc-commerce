import Image from "next/image";
import LogoImg from "./logo.webp";

const Logo = ({ className = "" }) => (
  <Image src={LogoImg} alt="Logo" className={className} />
);

export default Logo;
