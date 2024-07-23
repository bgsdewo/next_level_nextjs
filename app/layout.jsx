import { roboto } from "./fonts";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    default: "Situs Next.js",
    template: "%s | Situs Next.js",
  },
  description: "Kumpulan Tutuorial",
};
export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-gray-100 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          <hr />
          <span>I m Here to stay</span>
        </footer>
      </body>
    </html>
  );
}
