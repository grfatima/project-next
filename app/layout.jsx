import "../styles/globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar/index.jsx";

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
