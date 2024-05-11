// placesmysqlnew/app/(protected)/dashboard/testing/fileuploadfornextjs/page.jsx

"use client"

import React, { useState } from "react"
import toast from "react-hot-toast"

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const toastUploadMessage = (message) => toast(message)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    const formData = new FormData()
    formData.append("image", selectedFile)

    try {
      const response = await fetch("http://localhost:5000/api/placesmysql/", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        console.log("Image uploaded successfully!")
        toastUploadMessage("Bildupload: " + data.placesmysql)
      } else {
        console.error("Failed to upload image")
        toastUploadMessage("Failed to upload image")
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      toastUploadMessage("Error uploading image: " + error)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Upload
