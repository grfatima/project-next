import Footer from "@/Components/Footer";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/index.jsx";
import App from "./page";

export const metadata = {
  title: "Next.js",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
   
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
