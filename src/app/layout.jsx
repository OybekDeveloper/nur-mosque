import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
const notoSerif = Noto_Serif({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nur Mosque",
  description: "A mosque for the community",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${notoSerif.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="pt-20">
            {children}
          </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
