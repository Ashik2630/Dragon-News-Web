"use client";
import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending);

  return (
    <div className="flex justify-between container mx-auto mt-6 pt-5">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-[#706F6F]">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {isPending ? (
          <span className="loading loading-spinner loading-xl"></span>
      ) : user ? (
        <div className="flex items-center gap-2">
          <h2>Hello,{user?.name}</h2>
          <Image
            src={user?.image || userAvatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <button onClick={async() => await authClient.signOut()} className="btn bg-[#403F3F] text-white">Logout</button>
        </div>
      ) : (
        <button className="btn bg-[#403F3F] text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
