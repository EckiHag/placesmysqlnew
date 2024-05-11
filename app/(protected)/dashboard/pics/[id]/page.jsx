import { getPicsByBelongstoid } from "@/data/pics"
import Link from "next/link"
import CardPic from "@/components/CardPic"
import { Button } from "@/components/ui/button"

const PicsListWithBelongstoid = async ({ params }) => {
  const pics = await getPicsByBelongstoid(params.id)
  const sortedPics = pics.sort((a, b) => new Date(b.created.$date) - new Date(a.created.$date))

  return (
    <>
      <h2 className="text-3xl">PicsListWithBelongstoid: Hier steht die CardEditPlace als Titel für die Pics, wo der Place editiert und Pics hinzugefügt werden können.</h2>

      <div className="mt-16 mb-8">
        <Button asChild variant="default" size="sm">
          <Link href="/dashboard/places" className="btn btn-accent">
            Back to Places
          </Link>
        </Button>
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedPics.map((pic) => (
          <div key={pic.id}>
            <CardPic pic={pic} />
          </div>
        ))}
      </div>
    </>
  )
}
export default PicsListWithBelongstoid
