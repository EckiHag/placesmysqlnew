"use client"

import { Button } from "@/components/ui/button"
import { mongoDbPicsAction } from "@/actions/mongodbpicseinlesen"
import { mongoDbPlacesAction } from "@/actions/mongodbplaceseinlesen"
import { mongoDbSubjectsAction } from "@/actions/mongodbsubjectseinlesen"

const MongoDbEinlesenPage = () => {
  const mongoDbPics = async () => {
    console.log("Hier sollen die pics von der json-Datei in die MySql-Datenbank eingefügt werden.")
    try {
      await mongoDbPicsAction()
      console.log("pics erfolgreich in MySQL eingelesen.")
      // res.status(200).json({ message: "pics erfolgreich in MySQL eingelesen." })
    } catch (error) {
      console.error("Fehler beim Einlesen der pics:", error)
      // res.status(500).json({ error: "Ein Fehler ist aufgetreten." })
    }
  }

  const mongoDbPlaces = async () => {
    console.log("Clientside: Hier sollen die places von der json-Datei in die MySql-Datenbank eingefügt werden.")
    try {
      await mongoDbPlacesAction()
      console.log("mongoDbPlacesAction (client) ist durch")
      // res.status(200).json({ message: "pics erfolgreich in MySQL konvertiert." })
    } catch (error) {
      console.error("Fehler beim Konvertieren der places:", error)
      // res.status(500).json({ error: "Ein Fehler ist aufgetreten." })
    }
  }

  const mongoDbSubjects = async () => {
    console.log("Hier sollen die subjects von der json-Datei in die MySql-Datenbank eingefügt werden.")
    try {
      await mongoDbSubjectsAction()
      console.log("mongoDbSubjectsAction (client) ist durch")
      // res.status(200).json({ message: "Subjects erfolgreich in MySQL eingelesen." })
    } catch (error) {
      console.error("Fehler beim Einlesen der Subjects:", error)
      // res.status(500).json({ error: "Ein Fehler ist aufgetreten." })
    }
  }

  return (
    <div className="m-12">
      <div>Convert Places</div>
      <div>
        <Button variant="secondary" className="bg-blue-500 m-12" size="lg" onClick={mongoDbPics}>
          Tabelle pics in Mysql einlesen aus @/jsonschemas/mern.pics.js
        </Button>
        <Button variant="secondary" className="bg-blue-500 m-12" size="lg" onClick={mongoDbPlaces}>
          Tabelle places in Mysql einlesen aus @/jsonschemas/mern.places.js
        </Button>
        <Button variant="secondary" className="bg-blue-500 m-12" size="lg" onClick={mongoDbSubjects}>
          Tabelle subject in Mysql einlesen aus @/jsonschemas/mern.subjects.js
        </Button>
      </div>
    </div>
  )
}

export default MongoDbEinlesenPage
