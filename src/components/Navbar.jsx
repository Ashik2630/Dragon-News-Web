import Image from "next/image";
import Link from "next/link";
import userAvatar from '@/assets/user.png' 
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto mt-6">
        <div></div>
      <ul className="flex justify-between items-center gap-4 text-[#706F6F]">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink  href={"/career"} >Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <Image src={userAvatar} alt="User Avatar" width={60} height={60}/>
        <button className="btn bg-[#403F3F] text-white">
            <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
