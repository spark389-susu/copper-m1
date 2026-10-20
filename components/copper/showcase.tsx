import Image from "next/image";
import { lifestyleInfo } from "@/components/copper/lifestyle-info";
import { getProducts } from "@/lib/copper/catalog";

export function Showcase() {
  const photos = getProducts().flatMap((product) =>
    product.lifestyle.map((src) => ({ product, src })),
  );

  return (
    <section
      data-testid="showcase"
      id="showcase"
      className="bg-secondary text-secondary-foreground scroll-mt-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          Made for Arizona life
        </h2>
        {photos.map(({ product, src }, index) => {
          const info = lifestyleInfo(src, product.name);
          return (
            <div
              key={src}
              className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
            >
              <Image
                src={src}
                alt={info.alt}
                width={info.width}
                height={info.height}
                className={`h-auto w-full rounded-xl ${index % 2 === 1 ? "md:order-2" : ""}`}
              />
              <p className="text-xl font-medium">{info.caption}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
