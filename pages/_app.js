import "@/styles/globals.css";
import "@/styles/swiper.css";
import { Figtree } from "next/font/google";
import Header from "@/components/header/Header";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";
import { slidein, slideout } from "@/utils/animations";
import Footer from "@/components/footer/Footer";

const font = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.main key={router.pathname} className={font.className}>
        <motion.div className="slidein" variants={slidein} initial='initial' animate='animate' exit='exit'></motion.div>
        <motion.div className="slideout" variants={slideout} initial='initial' animate='animate' exit='exit'></motion.div>
        <Header />
        <Component {...pageProps} />
        {router.pathname !== '/' && <Footer />}
      </motion.main>
    </AnimatePresence>
  )
}
