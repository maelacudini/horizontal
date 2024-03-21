import "@/styles/globals.css";
import "@/styles/swiper.css";
import { Figtree } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "@/components/common/header/Header";
import Cursor from "@/components/common/cursor/Cursor";
import Footer from "@/components/common/footer/Footer";
import { CursorProvider } from "@/context/CursoreContext";

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
