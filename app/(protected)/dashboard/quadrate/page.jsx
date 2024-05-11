import { Button } from "@/components/ui/button"
import { LightDarkToggle } from "@/components/ui/light-dark-toggle"

const QuadratePage = () => {
  return (
    <div className="mt-3 text-lg bg-gray-400">
      QuadratePage
      <div className="container bg-zinc-700 h-screen">
        <div className="h-20 w-full bg-green-500"></div>
        <div className="h-12 w-12 bg-red-500 flex items-center justify-center">w</div>
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 bg-blue-500"></div>
        </div>

        <div className="h-12 w-12 bg-yellow-500"></div>
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-14" />
    </div>
  )
}

export default QuadratePage
