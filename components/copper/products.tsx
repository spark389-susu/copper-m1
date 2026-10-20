import Image from "next/image";
import { productAlt } from "@/components/copper/product-alt";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatUsd, getProducts } from "@/lib/copper/catalog";

export function Products() {
  const products = getProducts();

  return (
    <section
      data-testid="products"
      id="products"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16"
    >
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        Meet the products
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <Card
            key={product.id}
            data-testid="product-card"
            data-product={product.id}
          >
            <CardHeader>
              <Image
                src={product.cutout}
                alt={productAlt(product.id, product.name)}
                width={600}
                height={600}
                className="mx-auto h-auto w-full max-w-xs"
              />
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription>
                {product.type} · {formatUsd(product.priceUsd)}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {product.features.map((feature) => (
                  <li key={feature.name}>
                    <span className="font-semibold">{feature.name}.</span>{" "}
                    <span className="text-muted-foreground">
                      {feature.description}
                    </span>
                  </li>
                ))}
              </ul>
              <ul aria-label="Available colors" className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <li key={color}>
                    <Badge variant="secondary">{color}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
