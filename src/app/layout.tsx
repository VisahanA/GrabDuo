import type { Metadata } from "next";
import { CartProvider } from "./cart/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrabMart - Fresh Groceries Delivered",
  description: "Fresh groceries delivered to your door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
