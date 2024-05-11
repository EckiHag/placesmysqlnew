"use server"

import { places } from "@/jsonschemas/mern.places"
import { db } from "@/lib/db"

export const mongoDbPlacesAction = async () => {
  console.log("Serverside: Hier werden die places von der JSON-Datei in die MySQL-Datenbank eingefügt.")

  try {
    for (const place of places) {
      const { _id, title, description, address, location, image, creator, creatorsubject, created } = place

      // Prüfen, ob 'image' mit "./" beginnt, und falls nicht, "./" voranstellen
      const correctedImage = image.startsWith("./") ? image : `./${image}`

      await db.places.create({
        data: {
          id: _id.$oid,
          title,
          description,
          address,
          location_lat: location.lat,
          location_lng: location.lng,
          image: correctedImage.replace(/\\/g, "/"), // Ersetzt Rückwärtsschrägstriche durch Schrägstriche im Bildpfad und fügt "./" hinzu, wenn nicht vorhanden
          creator: creator.$oid,
          creatorsubject: creatorsubject.$oid,
          created: new Date(created.$date),
        },
      })
    }
    console.log("image wurde erfolgreich geändert.")
  } catch (error) {
    console.error("Fehler beim Ändern von place in die MySQL-Datenbank:", error)
  }
}
