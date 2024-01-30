import type { Metadata } from "next";
import { beautifulFont } from "./fonts";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://holodvdom.su/"),
  title: {
    template:
      "%s | Установка и продажа кондиционеров в Саранске и республике Мордовия",
    default: "Холод в Дом", // a default is required when creating a template
  },
  description:
    "Установка кондиционеров и сплит-систем | Профессиональный подбор кондиционеров | Гарантия на установку до пяти лет | Проффессионалы своего дела",
  icons: "../asstets/images/favicon-196.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={beautifulFont.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
