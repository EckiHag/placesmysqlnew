// import { places } from "@/jsonschemas/mern.places"
import { getPlacesAll, getPlacesByCreatorsubject } from "@/data/places"

import CardPlace from "@/components/CardPlace"

const PlacesWithCreatorsubject = async ({ params }) => {
  const places = await getPlacesByCreatorsubject(params.id)

  const sortedPlaces = places.sort((a, b) => new Date(b.created.$date) - new Date(a.created.$date))

  return (
    <div>
      <h2 className="text-3xl">PlacesWithCreatorsubject: Hier steht die CardEditSubject als Titel für die Places, wo das Subject editiert und Places hinzugefügt werden können.</h2>

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

export default PlacesWithCreatorsubject
