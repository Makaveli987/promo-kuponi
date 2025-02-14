import Link from "next/link";
import { CopyrightIcon, FileTextIcon, ShieldIcon } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-dark-background mt-auto">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-200">
            <CopyrightIcon className="w-4 h-4" />
            <span>
              {new Date().getFullYear()} Promo Kuponi. Sva prava zadržana.
            </span>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <Link
              href="/uslovi-koriscenja"
              className="text-sm text-gray-200 hover:text-gray-300 flex items-center space-x-1"
            >
              <FileTextIcon className="w-4 h-4" />
              <span>Uslovi korišćenja</span>
            </Link>
            <Link
              href="/politika-privatnosti"
              className="text-sm text-gray-200 hover:text-gray-300 flex items-center space-x-1"
            >
              <ShieldIcon className="w-4 h-4" />
              <span>Politika privatnosti</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
