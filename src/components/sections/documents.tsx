import { useState } from "react"
import { TbFileDownload, TbLoader2, TbAlertTriangle } from "react-icons/tb"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { downloadStampedPdf } from "@/lib/pdf"

type DocumentItem = {
  title: string
  description: string
  templateUrl: string
  outputName: string
}

const documents: DocumentItem[] = [
  {
    title: "Costos estimados de productos y servicios",
    description:
      "Descuentos progresivos según cantidad, frecuencia de contratación y paquetes combinados de servicios o productos.",
    templateUrl: "/catalogo-costos-servicios-productos.pdf",
    outputName: "Catalogo-de-Costos-ACH-Systems.pdf",
  },
  {
    title: "Costo de adquisición de equipos por primera vez",
    description:
      "Visión general de precios referenciales vigentes, clasificados por categoría y línea de producto a solicitar.",
    templateUrl: "/precios-referenciales-equipos.pdf",
    outputName: "Precios-Referenciales-Equipos-ACH-Systems.pdf",
  },
]

export function Documents() {
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleDownload(item: DocumentItem) {
    setError(null)
    setLoading(item.templateUrl)
    try {
      await downloadStampedPdf(item.templateUrl, item.outputName)
    } catch {
      setError(
        "No se pudo descargar el documento. Inténtalo de nuevo o contáctanos."
      )
    } finally {
      setLoading(null)
    }
  }

  return (
    <section
      id="documentos"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Costos y servicios"
          title="Conoce nuestros costos y servicios"
          description="Descarga los precios referenciales de nuestros servicios y productos. Sirven como guía inicial para que estimes rangos de inversión."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {documents.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.12}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-accent text-gold-strong">
                <TbFileDownload className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <Button
                className="mt-6 w-full"
                onClick={() => handleDownload(item)}
                disabled={loading !== null}
              >
                {loading === item.templateUrl ? (
                  <>
                    <TbLoader2 className="size-4 animate-spin" />
                    Preparando documento…
                  </>
                ) : (
                  <>
                    <TbFileDownload className="size-4" />
                    Descargar PDF
                  </>
                )}
              </Button>
            </Reveal>
          ))}
        </div>

        {error ? (
          <Reveal className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-xl border border-destructive/40 bg-card p-5">
            <TbAlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {error}
            </p>
          </Reveal>
        ) : null}

        <Reveal className="mx-auto mt-6 max-w-4xl rounded-xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Importante:</strong> todos los
            precios publicados son referenciales y pueden ajustarse según el
            análisis de tu caso. Para recibir una propuesta exacta y adaptada a
            tus necesidades, contáctanos y con gusto prepararemos una cotización
            personalizada.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
