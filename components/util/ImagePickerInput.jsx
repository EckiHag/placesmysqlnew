"Use client"

import React, { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const ImagePickerInput = (props) => {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const [isValid, setIsValid] = useState(false)

  const filePickerRef = useRef()

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const pickedHandler = (event) => {
    let pickedFile
    let fileIsValid = isValid
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0]
      setFile(pickedFile)
      setIsValid(true)
      fileIsValid = true
    } else {
      setIsValid(false)
      fileIsValid = false
    }
    props.onInput(props.id, pickedFile, fileIsValid)
  }

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  return (
    <div className="container">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        d
        type="file"
        accept=".jpg, .png, .jpeg, .mp4" // Änderung der akzeptierten Dateitypen
        onChange={pickedHandler}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-24 h-24">
          {previewUrl &&
            // Änderung: Video-Tag für .mp4-Dateien hinzufügen
            (file && file.type === "video/mp4" ? (
              <video width="320" height="240" controls preload="metadata">
                <source src={previewUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={previewUrl} alt="Preview" />
            ))}
          {!previewUrl && <p>Please pick an image or video.</p>}
        </div>
        <button className="mt-8" asChild variant="default" size="sm" onClick={pickImageHandler}>
          PICK IMAGE
        </button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  )
}

export default ImagePickerInput
