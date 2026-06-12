import "./globals.css";
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "SAIFCO Interior",
  description: "Luxury Interior Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}