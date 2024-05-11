// import { places } from "@/jsonschemas/mern.places"
import { getPlacesAll } from "@/data/places"

import CardPlace from "@/components/CardPlace"

const PlacesList = async () => {
  const places = await getPlacesAll()
  const sortedPlaces = places.sort((a, b) => new Date(b.created.$date) - new Date(a.created.$date))

  return (
    <div>
      <h2 className="text-3xl">PlacesList: PlacesList wird eigentlich nicht gebraucht, weil die PlacesList ja immer nur in Abhängigkeit von der Places-Id gelistet werden.</h2>
      <div id="cardWrapper" className="mt-8 flex items-center justify-center bg-meineFarbe-800">
        <div className="grid grid-flow-row gap-9 auto-rows-max items-center justify-center w-[800px] p-8">
          {sortedPlaces.map((place) => (
            <div key={place.id}>
              <CardPlace place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlacesList
