import "./globals.css";

export const metadata = {
  title: "Monika Shakya",
  description: "A Computer Engineer, Web and Data enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
