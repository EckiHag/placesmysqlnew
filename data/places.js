"use server"
import { db } from "@/lib/db"

export const getPlacesAll = async () => {
  try {
    const data = await db.places.findMany()
    // console.log("getPlacesAll")
    return data
  } catch (error) {
    console.error("Error fetching places:", error)
    return null
  }
}

export const getPlacesByCreatorsubject = async (id) => {
  // console.log("getPlacesByCreatorsubject: ", id)
  try {
    const data = await db.places.findMany({
      where: {
        creatorsubject: id,
      },
    })
    // console.log("getPlacesByCreatorsubject:", data)
    return data
  } catch (error) {
    console.error("Error fetching pictures:", error)
    return null
  }
}
