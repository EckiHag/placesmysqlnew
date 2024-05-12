# Weg der DB von localhost zu netcup

zunächst testweise mit placesmysql localhost app/pics = localhost mysql = netcup
dann testweise mit placesmysql auf vercel app = vercel / mysql/pics = netcup

1. mongodb -> download aktueller Daten -> Copy & Paste in mern.pics.js u.a.
   dieser Weg geht nicht: mongoAdresse eu@hgMongogbe34 authenticatorApp BrowseCollections mern pics etc.
   richtig: mongoDbCompass (auf dem Desktop) starten -> mongodb+srv://eckihag:**\***@nasamission.wekj0.mongodb.net/mern auswählen -> connect -> mern -> pics subject etc: export data -> export the full connection -> JSON -> Ergebnis: mern.pics.json etc.
2. Leeren der MySQL-Tabellen
3. Umbennen der _.json-Dateien in _.js-Dateien und Voranstellen von "export const subjects ="
   !!!Achtung: in frühen bildern fehlt in image "./" dies wird bei Bedarf beim Einlesen hinzugefügt, in pics, places und subjects.
4. Herunterladen der Bilder von netcup/server nach localhost mit filezilla

!!!Achtung: von prisma erstellte dbs liesen sich nicht nach dem Kopieren vom backup nicht öffnen (Mo. morgens in Berlin bei Martin)

5. Export von db in localhost/phpmyadmin (ohne Erstellen der Datenbank)I
6. Erstellen einer Datenbank bei netcup
7. in .env Verbindung zur DB bei netcup
   Host
   10.35.232.62:3306
   Datenbankname
   k175781_placesmysqlnew
   Benutzername
   k175781_bnplaces
   Passwort

8. leere Tabellen erstellen: npx prisma generate / npx prisma db push
9. Einlesen über die Buttons der homepage, die noch auf localhost läuft
10. Erstellen eines neuen users eu@eu123456
11. Wegen Cors:

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["beihaggis.de"],
  },
}

export default nextConfig
```

12. In CardSubject.jsw gebe ich die Adresse für die Bilder von Subjects ein, es ist ganz einfach:
    Avatar image={`https://beihaggis.de/${image}`} alt={title} />{" "}
13. In CardPlace: img src={`https://beihaggis.de/${place.image.replace(/^\.\//, "/")}`} alt="Bild"
14. In CardPic: Image src={`https://beihaggis.de/${image.replace(/^\.\//, "/")}`}

# Git

Zunächt braucht es eine Initialisierung im neuen Projekt 15. Comand Palette: Git Rename branch -> maineck
u behind file = untracked + clicken -> a = added to repository
Message: Commit vor Erstinstallation bei vercel
stage all files = alle Dateien bereitstellen
commit = begehen, übergeben, verpflichten

anlegen eines neuen repositorys (placesmyslnew) bei github und hochladen im trminal local durch ausführen der drei angegebenen befehle:

1.  git remote add origin https://github.com/EckiHag/placesmysqlnew.git
2.  git branch -M main
3.  git push -u origin main
    die Dateien liegen bei github
    link auf github Vercel Platform folgen und bei Vercel wird sofort die Veröffentlichung von placesmysql angeboten
    dann import und folgen der gegebenen Möglichkeiten bei vercel
    Fehler beim building insbesonder rot mit prisma -> inspect deployment -> build failed
    Ich füge folgende Zeile in package.json hinzu: "build": "prisma generate && next build",

# 30.4.24 Neuinstallation von xampp (in Berlin nach Neustart)

ein einfaches Ausstellen der firewall hat aus einem nicht bekannte Grund nicht ausgereicht

zuerst Deinstallation
dann umbennen dir xampp -> xxamp
Neuinstallation xampp-windows-x64-8.2.12-0-VS16-installer.exe
verschieben / neu erstellen der DBs: ein einfaches Kopieren der vom prisma erstellten DBs hat nicht funktioniert
eine einmal erstellte DB muss von phpmysql gelöscht werden, damit prisma nicht meckert, dass die Tabelle schon existiert

Weiter mit Bildern bei netcup
Beispiel des Feldes image in subject: "./uploads/images/2023-05-01_12-00-00-5b1dfe00-dfaa-11ed-a285-ab2b41e7e251.jpg"
