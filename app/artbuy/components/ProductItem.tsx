/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";

type Props = {
    product: Product
}

export const metadata: Metadata = {
    title: 'Arts'
}

export default function ProductItem({ product }: Props) {

    const content = (
        <div className="card">
            <Link href={`/artbuy/${product.slug}`}>
                <img
                    className="rounded shadow"
                    src={product.image}
                    alt={product.name} />
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/artbuy/${product.slug}`}>
                    <h2 className="text-lg">
                        {product.name}
                    </h2>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <p>{product.price}</p>

                <button className="primary-button">Add to Cart</button>
            </div>

        </div>
    )

    return content
}
