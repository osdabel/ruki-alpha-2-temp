import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigations/navbar/Navbar";
import Navbottom from "@/components/navigations/navbottom/Navbottom";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: ["normal", "italic"],
  preload: true
})


export const metadata = {
  title: "osdabel.my.id",
  description: "RUKI : Ruang Kreasi Dan Informasi, OSIS SMAN 18 Garut, MPK SMAN 18 Garut, Organisasi Siswa Intra Sekolah, OSIS, Majelis Perwakilan Kelas, MPK, SMAN 18 garut",
};



export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24..48,100..700,0..1,-25..200"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <Navbottom />
        {children}
      </body>
    </html>
  );
}
