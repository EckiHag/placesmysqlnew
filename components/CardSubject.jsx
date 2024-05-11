"use client"
import { useState } from "react"
import Link from "next/link"
import Avatar from "@/components/uiElements/Avatar"

const CardSubject = ({ id, image, title, description }) => {
  // ---- read-more-button
  const maxNumberOfWords = 9
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

  return (
    <div>
      <div className="container pt-5 pb-5 rounded-lg bg-meineFarbe-400">
        <div className="flex flex-row">
          <div className="w-20 h-20 flex-shrink-0">
            <Link href={`/dashboard/places/${id}`}>
              <Avatar image={`https://beihaggis.de/${image}`} alt={title} />{" "}
            </Link>
          </div>
          <div className="ml-4">
            <div className="text-2xl font-semibold">{title}</div>
          </div>
        </div>
        <div className="text-base mt-5 min-h-[80px]">
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
      </div>
    </div>
  )
}

export default CardSubject
