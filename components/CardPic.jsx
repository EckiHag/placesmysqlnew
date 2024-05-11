"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import toast from "react-hot-toast"
import { deletePicWithId } from "@/data/pics"
import Image from "next/image"

import Link from "next/link"

function ConfirmationModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <div className="container rounded-xl bg-red-300 fixed left-20 top-20 max-w-[200px]  modal">
      <div className="modal-content m-4 flex flex-col items-center justify-center gap-4">
        <p>{message}</p>
        <Button variant="default" size="sm" onClick={onConfirm}>
          OK
        </Button>
        <Button variant="default" size="sm" onClick={onCancel}>
          Abbrechen
        </Button>
      </div>
    </div>
  )
}

const CardPic = ({ pic }) => {
  // console.log(typeof onDelete) // Überprüfe den Typ von onDelete
  const description = pic.description
  const title = pic.title
  const image = pic.image
  const id = pic.id
  const [showConfirmation, setShowConfirmation] = useState(false)

  // ---- modales Bild zeigen beim Klicken
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  // eof ------------ modales Bild zeigen beim Klicken

  // ---- read-more-button
  const maxNumberOfWords = 20
  const [showFullDescription, setShowFullDescription] = useState(false)
  const descriptionWords = description.trim().split(" ")
  const truncatedDescription = showFullDescription ? description : descriptionWords.slice(0, maxNumberOfWords).join(" ")
  const toggleDescriptionHandler = () => {
    setShowFullDescription(!showFullDescription)
  }
  const toSplit = () => {
    return descriptionWords.length > maxNumberOfWords
  }
  // eof ------------ read-more-button

  const notify = () => toast("Toast from Pic.")

  const handleDelete = () => {
    deletePicWithId(image, id)
    setShowConfirmation(false)
    toast("Datensatz und Bild wurde gelöscht. ToDo: Es fehlt noch das Neuladen der Seite.")
  }

  const src = `https://beihaggis.de/${image.replace(/^\.\//, "/")}`
  const alt = "Bild"

  return (
    <div>
      <div className="container pt-5 pb-5 rounded-lg bg-meineFarbe-200">
        {/* Bedingte Anzeige des Bildes */}
        {image && (
          <div>
            {/* Wenn das Bild im Modalmodus ist, wird es über den gesamten Bildschirm angezeigt */}
            {isModalOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                <Image src={src} alt={alt} className="max-w-full max-h-full" onClick={closeModal} fill objectFit="contain" />
              </div>
            )}
            {/* Wenn das Bild nicht im Modalmodus ist, wird es in der Kartenansicht angezeigt */}
            {!isModalOpen && (
              <Image
                src={src}
                alt={alt}
                className="object-contain" // Stellt sicher, dass das Bild vollständig sichtbar ist und das Seitenverhältnis beibehält
                layout="responsive" // Passt die Größe des Bildes dynamisch an den Container an, behält aber das Seitenverhältnis bei
                width={500}
                height={500}
                onClick={openModal}
              />
            )}
          </div>
        )}

        <div className="ml-4">
          <div className="text-2xl font-semibold">{title}</div>
        </div>
        <div className="text-base ml-4 min-h-[80px]">
          <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
          <span className="text-xs">
            {" "}
            {toSplit() && (
              <button className="read-more-button" onClick={toggleDescriptionHandler}>
                {showFullDescription ? " ... weniger" : " ... mehr"}
              </button>
            )}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="default" size="sm" onClick={() => setShowConfirmation(true)}>
            Delete
          </Button>
          <ConfirmationModal isOpen={showConfirmation} message="Sind Sie sicher, dass Sie dieses Bild löschen möchten?" onConfirm={handleDelete} onCancel={() => setShowConfirmation(false)} />
          <Button asChild variant="default">
            <Link href="/dashboard/pics/add">Add</Link>
          </Button>
          <Button asChild variant="default">
            <Link href={`/dashboard/pics/edit/${id}`}>Edit</Link>
          </Button>
          <Button variant="default" size="sm" onClick={notify}>
            Toast client
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardPic
