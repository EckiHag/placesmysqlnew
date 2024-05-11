"use server"

import { subjects } from "@/jsonschemas/mern.subjects"
import { db } from "@/lib/db"

export const mongoDbSubjectsAction = async () => {
  console.log("Serverside: Hier werde ndie subjects von der JSON-Datei in die MySQL-Datenbank eingefügt werden.")

  try {
    console.log("Beginne mit dem Einfügen der Subjects in die MySQL-Datenbank...")
    for (const subject of subjects) {
      const { _id, title, image, description, creator, created, ord, group } = subject

      // Prüfen, ob 'image' mit "./" beginnt, und falls nicht, "./" voranstellen
      const correctedImage = image.startsWith("./") ? image : `./${image}`

      // Transformiere _id, created und ord in das richtige Format
      const id = _id.$oid
      const createdDate = new Date(created.$date)
      const ordDate = new Date(ord.$date)

      // Füge das Subject in die Datenbank ein
      await db.subjects.create({
        data: {
          id,
          title,
          image: correctedImage.replace(/\\/g, "/"), // Ersetzt Rückwärtsschrägstriche durch Schrägstriche im Bildpfad und fügt "./" hinzu, wenn nicht vorhanden
          description,
          creator: creator.$oid, // Gehe davon aus, dass creator die ID des Benutzers ist
          created: createdDate,
          ord: ordDate,
          group,
        },
      })

      console.log(`Subject mit ID ${id} wurde erfolgreich in die Datenbank eingefügt.`)
    }
    console.log("Alle Subjects wurden erfolgreich in die MySQL-Datenbank eingefügt.")
  } catch (error) {
    console.error("Fehler beim Einfügen der Subjects:", error)
  }
}
