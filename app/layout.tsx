import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Quicksand } from "next/font/google";
import { ptBR } from '@clerk/localizations'


import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andreia Couto",
  description: "Chamadas em vídeo Andreia Couto",
  icons: {
    icon: "/image/logotipo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-br">
      <ClerkProvider localization={ptBR}
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/image/logotipo.png",
          },
          variables: {
            colorText: "#000",
            colorPrimary: "#005BAC",
            colorBackground: "#fff",
            colorInputBackground: "#fff",
            colorInputText: "#000",
          },
          elements: {
            cardTitle: "font-bold text-[#003366]", 
            formButtonPrimary: "font-semibold text-white bg-[#005BAC]",
            formFieldLabel: "font-semibold text-[#333333]",
          },
        }}
      >
        <body className={`${inter.className} bg-[#F1F5FB]`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
