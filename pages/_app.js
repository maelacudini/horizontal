import "@/styles/swpr.css";
import "@/styles/globals.css";
import { Figtree } from "next/font/google";
import Header from "@/components/header/Header";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";
import { slidein, slideout } from "@/utils/animations";

const font = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <main className={font.className}>
      {/* <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Header /> */}
      <Component {...pageProps} />
      {/* <motion.div className="slidein" variants={slidein} initial='initial' animate='animate' exit='exit'></motion.div>
          <motion.div className="slideout" variants={slideout} initial='initial' animate='animate' exit='exit'></motion.div>
        </motion.div>
      </AnimatePresence> */}
    </main>
  )
}
