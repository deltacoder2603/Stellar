"use client"; 

import { ReactNode } from "react"; 
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { store } from '../utils/services/store';
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${spaceMono.className} bg-background justify-evenly min-h-screen flex flex-col`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  );
}
