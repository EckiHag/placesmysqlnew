"use server"
import { db } from "@/lib/db"
import fs from "fs"
import path from "path"

export const getPicsTwenty = async () => {
  try {
    const data = await db.pics.findMany({
      take: 20, // Begrenzt die Anzahl der zurückgegebenen Ergebnisse auf 20
    })
    // console.log("getPicsTwenty")
    return data
  } catch (error) {
    console.error("Error fetching places:", error)
    return null
  }
}

export const getPicsByBelongstoid = async (id) => {
  // console.log("getPicsByBelongstoid: ", id)
  try {
    const data = await db.pics.findMany({
      where: {
        belongstoid: id,
      },
      orderBy: {
        created: "desc", // Sortiere nach dem Erstellungsdatum abwärts
      },
    })
    // console.log("getPicsByBelongstoid:", data)
    return data
  } catch (error) {
    console.error("Error fetching pictures:", error)
    return null
  }
}

export const getPicById = async (id) => {
  try {
    const data = await db.pics.findUnique({
      where: {
        id: id,
      },
    })
    console.log("getPicById id: ", id)
    console.log("getPicById data: ", data)
    return data
  } catch (error) {
    console.error("Error fetching pictures:", error)
    return null
  }
}

// export const editPicWithId = async (id) => {
//   console.log("Die Funktion editPicWithId wurde mit folgender id aufgerufen: ", id)
//   return null
// }

export const deletePicWithId = async (image, id) => {
  console.log("Die Funktion deletePicWithId wurde mit folgendem image aufgerufen: ", image)
  try {
    const filePath = path.join(process.cwd(), "public", image)

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Fehler beim Löschen der Datei:", err)
        return
      }
      console.log("Die Datei wurde erfolgreich gelöscht.")
    })
  } catch (error) {
    console.error("Fehler beim Löschen des Bildes:", error)
    return false
  }

  try {
    const deletedPic = await db.pics.delete({
      where: {
        id: id,
      },
    })

    console.log("Der Datensatz wurde erfolgreich gelöscht: ", deletedPic)
    return true
  } catch (error) {
    console.error("Fehler beim Löschen des Datensatzes: ", error)
    return false
  }
}
