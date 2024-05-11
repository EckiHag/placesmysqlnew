"use client"
import React from "react"
import CardTesting from "@/components/CardTesting"
import { subjects } from "@/jsonschemas/mern.subjects"

const CardTestingPage = () => {
  const sortedSubjects = subjects.sort((a, b) => new Date(b.created.$date) - new Date(a.created.$date))

  return (
    <div>
      <div className="mt-4">CardTestingPage</div>
      <div className="mx-auto flex justify-center flex-col">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">Zur Zeit ohne Inhalt, zum testen</div>
      </div>
    </div>
  )
}

export default CardTestingPage
