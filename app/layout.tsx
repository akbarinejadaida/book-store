import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "@/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata = {
  title: {
    default: 'Book Store',
    template: '%s | Book Store'
  },
  description: 'Discover and buy your favorite books online.',
  keywords: ['books', 'online bookstore', 'reading', 'literature'],
  authors: [{ name: 'Book Store Team' }],
  creator: 'Book Store',
  publisher: 'Book Store',
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  width: 'device-width',
  initialScale: 1
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
