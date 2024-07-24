import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`min-h-screen h-screen overflow-hidden flex flex-col ${montserrat.className}`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
