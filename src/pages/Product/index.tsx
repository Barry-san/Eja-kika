import { useTextAnimations } from "../../animation";
import { PageHeader } from "../../components/ui/PageHeader";
import { ProductCard } from "./components/Card";

export default function ProductsPage() {
  useTextAnimations();
  return (
    <div className="font-body">
      <PageHeader title={"Products"} />
      <section className={"flex flex-col md:p-10 bg-secondary"}>
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-3 text-primary py-6">
          <h3 className="text-sm w-fit mx-auto inline-block text-primary border-divider border-3  rounded-lg pl-10 pr-4 py-2 subheading">
            Our Products
          </h3>
          <h2 className="font-bold md:text-5xl md:text-[46px] tracking-tight leading-[1.2em] text-anime-style-1">
            Smoked fish options for home cooking, retail, and bulk supply.
          </h2>
        </div>
        <div className="p-5 flex flex-wrap gap-8 *:grow">
          <ProductCard
            title="Eja Kika (350g)"
            description="Retail Pack"
            image="/images/products/product-350g.jpeg"
          />

          <ProductCard
            title="Eja Kika (500g)"
            description="Family Size"
            image="/images/products/product-500.jpeg"
          />
        </div>
      </section>
    </div>
  );
}
