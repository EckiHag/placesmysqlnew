"use server"
import { db } from "@/lib/db"

export const getSubjectsAll = async () => {
  try {
    const data = await db.subjects.findMany({
      orderBy: {
        created: "desc", // Sortiere nach dem Erstellungsdatum abwärts
      },
    })
    // console.log("getSubjectsAll")
    return data
  } catch (error) {
    console.error("Error fetching places:", error)
    return null
  }
}
