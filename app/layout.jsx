import "../styles/globals.css";
import Footer from "@/Components/Footer";
import { Manrope } from "next/font/google";
import Navbar from "@/Components/Navbar/index.jsx";

// Manrope fontu
const manrope = Manrope({
  weight: ["200", "400", "400"], // lazım olan qalınlıqlar
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
