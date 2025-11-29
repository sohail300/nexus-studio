import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

export const metadata: Metadata = {
  title: "Nexus Studio",
  description: "Nexus Studio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <style>
          {`
                    ::selection {
                        background-color: #494949; /* Change the highlight color to gray */
                        color: white; /* Optional: Change the text color when selected */
                    }
                `}
        </style>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
