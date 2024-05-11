"use client"

import { getPicsByBelongstoid } from "@/data/pics"
import CardPic from "@/components/CardPic"

const PicsList = async () => {
  const pics = await getPicsByBelongstoid()

  const sortedPics = pics.sort((a, b) => new Date(b.created.$date) - new Date(a.created.$date))

  return (
    <div>
      <h2 className="text-3xl">PicsList: PicsList wird eigentlich nicht gebraucht, weil die Pics ja immer nur in Abhängigkeit von der Places-Id gelistet werden.</h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedPics.map((pic) => (
          <CardPic key={pic.id} pic={pic} />
          // <CardPic key={pic.id} pic={pic} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default PicsList
