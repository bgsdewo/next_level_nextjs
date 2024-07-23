import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="text-gray-800 font-roboto hover:underline">
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/blog"
            className="text-gray-800 font-roboto hover:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-800 font-roboto hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            prefetch={false}
            className="text-gray-800 font-roboto hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
