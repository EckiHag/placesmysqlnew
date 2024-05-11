"use client"

import Link from "next/link"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = (props) => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 0,
      link: "dashboard",
    },
    {
      id: 1,
      link: "settings",
    },
    {
      id: 2,
      link: "quadrate",
    },
    {
      id: 3,
      link: "mongodbeinlesen",
    },
    {
      id: 4,
      link: "subjects",
    },
    {
      id: 5,
      link: "places",
    },
    {
      id: 6,
      link: "pics",
    },
    {
      id: 7,
      link: "cardtesting",
    },
    {
      id: 8,
      link: "signupwithshad",
    },
  ]

  return (
    <div className="flex justify-between items-center w-full px-4 text-white bg-meineFarbe-400 fixed nav">
      <div>
        <h4 className="text-lg ml-2 truncate">{props.loggedInUserName}</h4>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline">
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-meineFarbe-300 to-meineFarbe-600 text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-meineFarbe-900">
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
