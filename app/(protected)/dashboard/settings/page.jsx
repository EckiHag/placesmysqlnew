import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
// import { LightDarkToggle } from "@/components/ui/light-dark-toggle"

const SettingsPage = async () => {
  const session = await auth()
  const role = session.user.role
  return (
    <div className="mt-40 lg:mt-6">
      <div>
        {JSON.stringify(session).replaceAll(",", ", ")}
        <h2>{role}</h2>
        {role === "ADMIN" && <h2 className="text-2xl">Nur für ADMIN</h2>}
        <h2 className="text-2xl">Für User und Admin</h2>
        {role === "USER" && <h2 className="text-2xl">Nur für USER</h2>}

        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Button variant="secondary" className="bg-blue-500 mt-12" size="lg" type="submit">
            Sign out
          </Button>
          {/* <button type="submit">Sign out</button> */}
        </form>
      </div>
    </div>
  )
}

export default SettingsPage

// import { auth, signOut } from "@/auth"

// const SettingsPage = async () => {
//   const session = await auth()
//   return (
//     <div>
//       <div className="flex flex-col bg-blue-500 items-center rounded-lg">
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Settings.</h1>
//         <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Die erste Seite die aufgerufen wird.</h1>
//         <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">Ein Versuch.</h1>
//       </div>

//       <h2 className="mb-8 ml-8 pl-5 text-xl font-extrabold bg-green-300 rounded">Inhalt</h2>
//       <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-gray-300">{JSON.stringify(session).replaceAll(",", ", ")}</div>
//     </div>
//   )
// }

// export default SettingsPage
