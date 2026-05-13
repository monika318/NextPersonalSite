import { Inter, Playfair } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair({ subsets: ["latin"], variable: "--font-Play-mono" });

export const metadata = {
  title: "Monika Shakya",
  description: "A Computer Engineer, Web and Data enthusiat",
  icons: [{ rel: "icon", url: "/public/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
