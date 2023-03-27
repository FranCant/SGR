import { Toaster } from "react-hot-toast";
import Container from "./components/Container";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        {/* <Toaster /> */}
        <Container>{children}</Container>
      </body>
    </html>
  );
}