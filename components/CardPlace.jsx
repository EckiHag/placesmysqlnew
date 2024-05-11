"use client"
import Link from "next/link"

const CardPlace = ({ place }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-meineFarbe-200">
      <div>
        <div className="flex items-center justify-center">{place.image && <img src={`https://beihaggis.de/${place.image.replace(/^\.\//, "/")}`} alt="Bild" className="h-96 p-5" />}</div>
        <Link href={`/dashboard/pics/${place.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pics</button>
        </Link>
        <div className="font-bold text-xl mb-2 pl-5">{place.title}</div>
        <div className="text-xl mb-2 pl-5">{place.description}</div>
      </div>
    </div>
  )
}

export default CardPlace
