const uuid = require("uuid/v1")

function getImageNameForSaving() {
  const today = new Date()
  const datePrefix =
    today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "_" + ("0" + today.getHours()).slice(-2) + "-" + ("0" + today.getMinutes()).slice(-2) + "-" + ("0" + today.getSeconds()).slice(-2)
  // cb(null, datePrefix + "-" + uuid() + "." + "jpg")

  // Existiert das Verzeichnis? Nur bei Bedarf.
  // fs.access('./_bilderEssen', (err) => {
  //   if (err) {
  //     fs.mkdirSync('./_bilderEssen')
  //   }
  // })

  const filename = datePrefix + "-" + uuid() + "." + "jpg"
  return filename
}

module.exports = getImageNameForSaving
