import { Inter } from "next/font/google"
import "./globals.css"
// import Navbar from "@/components/Navbar"

import { SessionProvider } from "./sessioncontext"
import Providers from "./providers"
import { auth } from "../auth"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Eckis placesmysqlnew",
  description: "Clone of Places to develop the app",
}

export default async function RootLayout({ children }) {
  const session = await auth()
  const name = session?.user?.name ?? "None"

  return (
    <html lang="en">
      <body id="body" className={inter.className}>
        {/* <Navbar loggedInUserName={name} /> */}
        {/* <main className="px-4 py-4 max-w-6xl mx-auto"> */}
        <main id="main" className="bg-meineFarbe-100">
          <SessionProvider session={session}>
            <Providers>{children}</Providers>
          </SessionProvider>
        </main>
      </body>
    </html>
  )
}
