import Link from "next/link";
import style from "./header.module.scss";
import { links } from "@/utils/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollY;

      setIsHeaderVisible(isScrollingUp || currentScrollY === 0);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <header className={style.header}>
          <nav className={style.nav}>
            {links.map((link, index) => (
              <div key={index} className={style.link}>
                <Link href={link.url}>
                  {pathname === link.url ? <b>{link.name}</b> : link.name}
                </Link>
                <span className={style.emoji}>{link.emoji}</span>
              </div>
            ))}
          </nav>
        </header>
      )}
    </AnimatePresence>
  );
}
