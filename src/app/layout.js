import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GoogleAnalytics from './components/GoogleAnalytics';

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "NPTEL Quiz- Educational Leadership",
  description: "Quiz app for NPTEL Educational Leadership course built by Nitish Ramaraj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`bg-[#e9f2fa] ${noto_sans.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
