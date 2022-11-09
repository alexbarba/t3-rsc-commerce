import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
const Sidebar = () => {
  return (
    <nav className="bg-slate-700 font-bold">
      <ul>
        <li>
          <Link
            href="/products"
            className="flex items-center p-4  hover:bg-slate-100 hover:text-slate-700"
          >
            <HomeIcon className="mr-4 h-6 w-6" />
            Inicio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
