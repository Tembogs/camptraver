import Link from "next/link"
import Button from "./Button";
import { Nav_links } from "@/constant/index";
import { FaUser, FaBars } from 'react-icons/fa';

export default function Navbar () {
 
  return (
    <nav className=" justify-between max-container relative z-30 py-5 padding-container flex">
      <Link href={'/'} className="font-bold mx-5">
        Hi<span className="text-green-500">Link.</span>
      </Link>
      <ul className="h-full gap-12 lg:flex hidden items-center">
        {Nav_links.map((nav) =>
          <li key={nav.key} className="regular-16 pb-1.5 transition-all hover:font-bold hover:text-green-500 hover:underline">
            <Link href={nav.href}>
              {nav.label}
            </Link>
          </li>
        )}
      </ul>
      
      <div className=" text-white mx-5 hidden lg:flex">
       <Button
       type ='button'
       title='Login'
       icon = {<FaUser className="size-3"/>}
       variant = 'btn_dark_green'
       />
      </div>

      <FaBars className="mx-5 text-xl cursor-pointer lg:hidden"/>
    </nav>
  )
  }

