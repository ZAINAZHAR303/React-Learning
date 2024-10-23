"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgotpassword" },
];
export default function layout({ children }) {
  const pathname = usePathname();
  return (
    <div>
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
