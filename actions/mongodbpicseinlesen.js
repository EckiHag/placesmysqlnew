"use server"

import { pics } from "@/jsonschemas/mern.pics"
import { db } from "@/lib/db"

// await db.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//     },
//   })

export const mongoDbPicsAction = async () => {
  console.log("Serverside: Hier sollen die pics von der json-Datei in die MySql-Datenbank eingefügt werden.")
  try {
    // Iteriere durch die pics-Array-Sammlung und füge jeden Eintrag in die MySQL-Tabelle ein
    for (const pic of pics) {
      // Prüfen, ob 'image' mit "./" beginnt, und falls nicht, "./" voranstellen
      const correctedImage = pic.image.startsWith("./") ? pic.image : `./${pic.image}`
      await db.pics.create({
        data: {
          id: pic._id.$oid,
          copyright: pic.copyright,
          title: pic.title,
          description: pic.description,
          image: correctedImage,
          belongstoid: pic.belongstoid.$oid, // Assuming belongstoid is integer
          created: new Date(pic.created.$date),
          ord: 0, // Default value for ord
          video: false, // Default value for video
        },
      })
      console.log("pic erfolgreich eingefügt mit der ID: " + pic._id.$oid)
    }
  } catch (error) {
    console.error("Fehler beim Insert von Pics:", error)
  } finally {
    console.log("Alles erledigt!")
    // Prisma-Client-Instanz schließen
    // await prisma.$disconnect()
    return { success: "Pics converted!" }
  }
}
