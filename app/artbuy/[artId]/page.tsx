import data from "@/app/utils/data"
import Image from "next/image"
import Link from "next/link"

type Params = {
  params: {
    artId: string
  }
}

export default function ArtScreen({ params: { artId } }: Params) {


  const art = data.products.find(each => each.slug === artId)

  if (!art) {
    return undefined
  }

  const content =
    <>
      <div className="py-2">
        <Link href='/artbuy'>Back to arts</Link>

      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image src={art.image}
            alt={art.name}
            // width={640}
            // height={640}
            fill
            >
          </Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{art.name}</h1>
            </li>
          </ul>
        </div>
      </div>
    </>
    
  return content
}
