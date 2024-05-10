import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Dec",
  description: "Doctor appointment",
};

export default function Header({ children }) {

  return (
    <html lang="en">
      <body className={inter.className} style={{position:"relative"}}>
        <div className="flex w-screen item-center " >
          <h1 className="text-2xl font-bold my-6 mx-4">Doctor's Dec</h1>
          <nav className="md:flex hidden gap-8 mx-5 my-6">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Fix Appointment", "/appoint"],
              ["Get Reports", "/reports"],
            ].map(([title, url]) => (
              <Link
                href={url}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
