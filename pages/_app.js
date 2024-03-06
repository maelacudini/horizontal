import "@/styles/globals.css";
import "@/styles/swiper.css";
import { Figtree } from "next/font/google";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import Footer from "@/components/footer/Footer";
import { CursorProvider } from "@/context/CursoreContext";
import Cursor from "@/components/cursor/Cursor";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const font = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])


  return (
    <main className={font.className}>
      <CursorProvider>
        <Header />
        <Component {...pageProps} />
        {router.pathname !== '/' && <Footer />}
        {router.pathname !== '/' && <Cursor />}
      </CursorProvider>
    </main>
  )
}
