// app/api/upload/route.jsx

import { NextResponse } from "next/server"
import path from "path"
import { writeFile } from "fs/promises"

export const POST = async (req, res) => {
  const formData = await req.formData()
  const file = formData.get("file")
  // console.log("Check if a file is received")
  if (!file) {
    console.log("No file is received")
    return NextResponse.json({ error: "No files received." }, { status: 400 })
  }

  // Convert the file data to a Buffer
  const buffer = Buffer.from(await file.arrayBuffer())
  // Replace spaces in the file name with underscores
  const filename = file.name.replaceAll(" ", "_")
  console.log("Filename:", filename)

  const uploadBeiServerWoApp = process.cwd() + "public/assets/"
  try {
    await writeFile(path.join(uploadBeiServerWoApp + filename), buffer)
    return NextResponse.json({ Message: "Success", status: 201 })
  } catch (error) {
    console.log("Error occurred ", error)
    return NextResponse.json({ Message: "Failed", status: 500 })
  }
}
