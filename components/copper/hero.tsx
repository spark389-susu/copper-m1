import Image from "next/image";
import { productAlt } from "@/components/copper/product-alt";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";

export function Hero() {
  const products = getProducts();

  return (
    <section
      data-testid="hero"
      id="top"
      className="bg-secondary text-secondary-foreground"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Meet Copper: AI for your home and your notes
          </h1>
          <p className="text-lg">From raw ideas to refined answers.</p>
          <Button asChild size="lg">
            <a href="#products">See products</a>
          </Button>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          {products.map((product) => (
            <Image
              key={product.id}
              src={product.cutout}
              alt={productAlt(product.id, product.name)}
              width={600}
              height={600}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
