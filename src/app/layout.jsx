
import '../css/header.css'
import '../css/globals.css'
import { Header } from "../componentes/header"
import { Footer } from "../componentes/Footer"

export default function RootLayout({children}) {
    return  (
        <html lang="en">
            <body>

   <Header />
  {children}
  

<Footer/>
            </body>
            
        </html>
    )
}