//app/(protected)/dashboard/testing/fileuploadfornextjs/pagemitcallupload.jsx
"use client"

import React, { useState } from "react"
import toast from "react-hot-toast"

export default function Upload() {
  const toastUploadMessage = (message) => toast(message)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("file", file)

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data from Upload/client:", data)
        toastUploadMessage("Bildupload: " + JSON.stringify(data))
      })
      .catch((error) => {
        console.error(error)
        toastUploadMessage(error)
      })
  }

  return (
    <div className="join">
      <h1 className="m-8 join-item">Upload Image</h1>
      <input className="m-8 join-item" type="file" onChange={handleImageUpload} />
    </div>
  )
}
