import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

function formatStamp(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0")
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const meridiem = hours >= 12 ? "P.M." : "A.M."
  hours = hours % 12
  if (hours === 0) hours = 12

  const day = pad(date.getDate())
  const month = pad(date.getMonth() + 1)
  const year = date.getFullYear()

  return `DESCARGADO EL ${day}-${month}-${year} A LAS ${pad(hours)}:${pad(minutes)} ${meridiem}`
}

export async function downloadStampedPdf(
  templateUrl: string,
  outputName: string
) {
  const response = await fetch(templateUrl)
  if (!response.ok) {
    throw new Error("No se pudo cargar el documento.")
  }

  const bytes = await response.arrayBuffer()
  const pdfDoc = await PDFDocument.load(bytes)
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const stamp = formatStamp(new Date())

  for (const page of pdfDoc.getPages()) {
    const { height } = page.getSize()

    page.drawRectangle({
      x: 42,
      y: height - 758,
      width: 280,
      height: 15,
      color: rgb(1, 1, 1),
    })

    page.drawText(stamp, {
      x: 42.6,
      y: height - 754,
      size: 8,
      font,
      color: rgb(0, 0, 0),
    })
  }

  const output = await pdfDoc.save()
  const blob = new Blob([output as BlobPart], { type: "application/pdf" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = outputName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
