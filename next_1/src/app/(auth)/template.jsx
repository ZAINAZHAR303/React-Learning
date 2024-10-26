"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgotpassword" },
];
export default function layout({ children }) {
  const [input, setInput] = useState("")
  const pathname = usePathname();
  return (
    <div>
      <input type="text" placeholder="search" value={input} onChange={(e) => setInput(e.target.value)}   />
      {navlinks.map((link) => {
        const isactive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isactive ? "text-bold mr-4" : "text-blue-400 mr-4"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
