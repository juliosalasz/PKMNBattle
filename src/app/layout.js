import { GlobalContextProvider } from "../../context/pkmnContext";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./main.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PICK YOUR FAVORITE PKMN",
  description: "WHO WILL BE THE BEST?!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <header className={styles.mainTitle}>
            <h2>PICK YOUR FAVORITE PKMN</h2>
          </header>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </main>
      </body>
    </html>
  );
}
