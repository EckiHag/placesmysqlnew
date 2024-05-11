import React from "react"

import Avatar from "@/components/uiElements/Avatar"
const CardMedium = ({ image, title, description }) => {
  return (
    <div>
      <div className="container pt-5 pb-5 rounded-lg bg-meineFarbe-400">
        <div className="flex flex-row">
          <div className="w-20 h-20 flex-shrink-0">
            <Avatar image={`/${image}`} alt={title} />
          </div>
          <div className="ml-4">
            <div className="text-2xl font-semibold">{title}</div>
          </div>
        </div>
        <div className="text-base mt-5 h-[50px] line-clamp-2">{description}</div>
      </div>
    </div>
  )
}

export default CardMedium
