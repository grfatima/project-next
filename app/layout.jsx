import "../styles/globals.css";
import Navbar from "@/components/Navbar/index.jsx";

export const metadata = {
  title: "Next.js",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <div
          className="w-screen h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Sub.png')",
          }}
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
