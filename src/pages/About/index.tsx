import { Link } from "react-router-dom";
import { PageHeader, ScrollingTicker } from "../../components/ui/PageHeader";
import { SatisfactionBlock } from "../Home/components/About";
import {
  about1,
  about2,
  experience,
  quality1,
  quality2,
  trueTasteBody,
  whiteArrow,
} from "../../icons";

export default function AboutPage() {
  return (
    <div>
      <PageHeader title={"About us"} />
      <ScrollingTicker />

      <div className="font-body py-10 ">
        <div className="grid lg:grid-cols-2 gap-6 md:p-6 items-center justify-between">
          <SatisfactionBlock />
          <article className="flex flex-col gap-4 p-4 font-body">
            <h3 className="subheading bg-secondary text-primary w-fit fadeInUp">
              About us
            </h3>
            <h2 className="font-bold text-primary leading-[1.2em] tracking-tight md:text-[36px] lg:text-[46px] text-anime-style-3">
              Premium smoked fish made for repeat orders and stronger shelves
            </h2>
            <p className="text-copy fadeInUp">
              Eja Kika was built to deliver smoked fish with a polished finish,
              dependable supply, and the kind of flavor retailers and households
              return for.{" "}
            </p>

            <div className="flex flex-col gap-3 fadeInUp">
              <img src={about1} width={40} />
              <h2 className="text-primary font-semibold text-xl">
                Selected for quality, smoked for flavor{" "}
              </h2>
              <p className="text-copy">
                We select and prepare fish with attention to freshness, smoke,
                texture, and the final finish customers expect from a premium
                product.{" "}
              </p>
            </div>

            <div className="flex flex-col gap-3 fadeInUp">
              <img src={about2} width={40} />
              <h2 className="text-primary font-semibold text-xl">
                Built for households and wholesale buyers
              </h2>
              <p className="text-copy">
                Our smoked fish is made for daily home cooking, special dishes,
                and wholesale buyers who need steady supply and a reliable
                product line.
              </p>
            </div>
          </article>
        </div>
        <section className="bg-accent/10 py-20 px-4">
          <h2 className="mx-auto text-center inlie-grid w-fit border rounded-lg subheading fadeInUp">
            Our process
          </h2>
          <div className="grid lg:grid-flow-col items-center justify-center gap-5 lg:p-5 my-6">
            <div className="rounded-lg">
              <img
                src="/images/about/ejakika-3.jpeg"
                alt="Our process"
                className="w-full object-cover aspect-[1/0.942] rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-5 items-center fadeInUp">
              <article className="p-5 bg-white flex flex-col gap-5 font-body rounded-[20px]">
                <h3 className="text-primary font-semibold text-xl">
                  Our Mission
                </h3>
                <p className="text-copy">
                  To deliver smoked fish that feels premium, tastes consistent,
                  and performs well for kitchens, shops, and wholesale supply.
                </p>
                <ul className="grid gap-3 checklist text-primary md:grid-cols-2">
                  <li className="checklist">
                    Selected for quality before smoking,{" "}
                  </li>
                  <li className="checklist">Clean handling and packaging. </li>
                  <li className="checklist">Rich aroma and bold taste. </li>
                  <li className="checklist">
                    Sized for everyday and bulk use.
                  </li>
                </ul>
              </article>

              <article className="p-5 bg-white flex flex-col gap-5 font-body rounded-[20px]">
                <h3 className="text-primary font-semibold text-xl">
                  Our Vision
                </h3>
                <p className="text-copy">
                  To become the smoked-fish brand that retailers and households
                  choose first when quality matters.
                </p>
                <ul className="grid gap-3 list-disc text-primary md:grid-cols-2">
                  <li className="checklist">Quality in every pack, </li>
                  <li className="checklist">Reliable supply for customers. </li>
                  <li className="checklist">
                    Smoke that keeps the natural taste.{" "}
                  </li>
                  <li className="checklist">Built for homes and businesses.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 w-full">
          {/* promise section */}
          <article className="grid grid-flow-row lg:grid-cols-2 gap-5 lg:p-12.5 items-center">
            <div className="mx-auto p-4">
              <figure className="relative mx-auto">
                <img
                  src="/images/home/ejakika-1.jpeg"
                  className="aspect-[1/0.94] object-cover max-w-full"
                />
                <div className="absolute top-5 left-5 z-10 bg-primary text-white p-6 rounded-2xl grid gap-5">
                  <img src={experience} />
                  <h3 className="font-bold text-xl"> 5+ years of experience</h3>
                </div>
              </figure>
            </div>

            <article className="flex flex-col gap-6 justify-center p-4">
              <h3 className="bg-secondary text-primary px-4 md:pl-10  py-2 rounded-lg w-fit subheading text-balance">
                Our promise
              </h3>
              <h2 className="text-[24px] md:text-[36px] lg:text-[46px] leading-[1.2em] tracking-tight font-bold text-primary text-anime-style-3">
                Consistent smoked fish quality in every pack.
              </h2>
              <p className="text-copy fadeInUp">
                Every Eja Kika pack is prepared to deliver clean texture, rich
                flavor, and the dependable taste customers expect.
              </p>
              <article className="flex flex-col gap-5 fadeInUp">
                <div className="flex gap-5">
                  <div className="bg-accent w-11.25 h-11.25 lg:w-15 lg:h-15 flex items-center justify-center rounded-full">
                    <img
                      src={quality1}
                      alt=""
                      className="aspect-square w-5 lg:w-auto"
                    />
                  </div>
                  <div className="grid gap-1" data-aos="fadeInUp">
                    <h3 className="text-primary text-[20px] font-bold leading-[1.4em]">
                      Trusted Fish Selection
                    </h3>
                    <p className="text-copy">
                      We choose fish with quality, freshness, and size in mind
                      so every batch starts right.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="bg-accent w-11.25 h-11.25 lg:w-15 lg:h-15 flex items-center justify-center rounded-full">
                    <img
                      src={quality2}
                      alt=""
                      className="aspect-square w-5 lg:w-auto"
                    />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-primary md:text-[20px] font-bold leading-[1.4em]">
                      Traditional Smoking Method{" "}
                    </h3>
                    <p className="text-copy">
                      Our smoking process is designed to lock in flavor while
                      keeping the fish ready for cooking or resale.
                    </p>
                  </div>
                </div>
                <Link
                  to={"/contact"}
                  className="bg-accent grid grid-flow-col w-fit gap-3 px-4 py-3.5 text-white font-bold rounded-xl"
                >
                  <p>Contact Us</p>
                  <img src={whiteArrow} />
                </Link>
              </article>
            </article>
          </article>
          {/* why choose us */}
          <div className="flex flex-col gap-10">
            <article className="text-center flex flex-col gap-3">
              <h3 className="capitalize text-primary w-fit mx-auto pl-10 pr-4 py-2 rounded-lg border-divider bg-secondary subheading text-sm md:text-base">
                Why choose us
              </h3>
              <h2 className="md:text-[36px] lg:text-[46px] leading-[1.2em] tracking-tight text-primary font-bold">
                Why customers choose Eja Kika
              </h2>
            </article>
            <div className="flex *:basis-auto flex-wrap *:px-4 *:shrink-0 *:max-w-full justify-center py-11.5 gap-7">
              {/* benefits column 1 start */}
              <ul className="flex flex-col gap-12.5 items-center md:w-1/2 basis-auto">
                <li>
                  <article className="flex gap-3 item-center">
                    <div className="bg-accent flex items-center rounded-full h-fit w-fit p-4">
                      <img src="src/assets/icons/benefits/benefit-1" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-primary text-xl">
                        Clean and Hygenic Processing
                      </h3>
                      <p className="text-copy">
                        Prepared with clean handling from start to finish.{" "}
                      </p>
                    </div>
                  </article>
                </li>

                <li>
                  <article className="flex gap-3 item-center">
                    <div className="bg-accent flex items-center rounded-full h-fit w-fit p-4">
                      <img src="src/assets/icons/benefits/benefit-2.svg" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-primary text-xl">
                        Naturally Smoked Preservation
                      </h3>
                      <p className="text-copy">
                        Smoked to preserve flavor and reduce waste.
                      </p>
                    </div>
                  </article>
                </li>

                <li>
                  <article className="flex gap-3 item-center">
                    <div className="bg-accent flex items-center rounded-full h-fit w-fit p-4">
                      <img src="src/assets/icons/benefits/benefit-3.svg" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-primary text-xl">
                        Chef-Preferred Flavor
                      </h3>
                      <p className="text-copy">
                        Balanced smoke and texture for cooking and resale.
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
              {/* benefits column 2 start */}
              <ul className="flex flex-col gap-12.5 items-center order-3 md:order-2 lg:order-3 md:w-1/2 basis-auto">
                <li>
                  <article className="flex gap-3 item-center">
                    <div className="bg-accent flex items-center rounded-full h-fit w-fit p-4">
                      <img src="src/assets/icons/benefits/benefit-4.svg" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-primary text-xl">
                        Fresh Catch Selection
                      </h3>
                      <p className="text-copy">
                        Chosen for size and quality before smoking.
                      </p>
                    </div>
                  </article>
                </li>

                <li>
                  <article className="flex gap-3 item-center">
                    <div className="bg-accent flex items-center rounded-full h-fit w-fit p-4">
                      <img src="src/assets/icons/benefits/benefit-5.svg" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-primary text-xl">
                        Consistent Quality Control
                      </h3>
                      <p className="text-copy">
                        Every batch is checked for taste and finish.
                      </p>
                    </div>
                  </article>
                </li>

                <li>
                  <article className="flex gap-3 item-center">
                    <div className="bg-accent flex items-center rounded-full h-fit w-fit p-4">
                      <img src="src/assets/icons/benefits/benefit-6.svg" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-primary text-xl">
                        Fast and Secure Delivery
                      </h3>
                      <p className="text-copy">
                        Packed and delivered to keep orders moving.
                      </p>
                    </div>
                  </article>
                </li>
              </ul>
              <figure className="order-2 md:order-3 lg:order-2 w-full">
                <img src="/images/about/ejakika-5.jpeg" />
              </figure>
            </div>
            <p className="text-center text-primary">
              From careful sourcing to final packaging -{" "}
              <Link to={"/contact"} className="text-accent underline">
                see why customers trust Eja Kika.
              </Link>
            </p>
          </div>
          {/* true taste */}

          <div className="bg-secondary flex flex-col *:flex-1 lg:flex-row *:px-5 md:px-6 py-10 lg:py-25 gap-5">
            <article className="flex flex-col gap-4 ">
              <section className="grid gap-5">
                <h3 className="subheading border border-slate-300 text-primary w-fit text-sm">
                  Real Eja Kika Taste
                </h3>
                <h2 className="md:text-[36px] lg:text-[46px] leading-[1.2em] tracking-tight font-bold text-primary">
                  Smoked fish with deep flavor in every bite
                </h2>
                <p className="text-copy">
                  We prepare each pack to deliver a smoky aroma, clean finish,
                  and the bold taste that works in soups, stews, sauces, and
                  everyday cooking.{" "}
                </p>
              </section>
              <div className="flex gap-5">
                <div className="h-15 w-15 rounded-full bg-accent grid place-content-around">
                  <img src={trueTasteBody} width={30} />
                </div>
                <div className="grid gap-2.5">
                  <h3 className="text-primary font-bold text-[20px] leading-[1.4em] tracking-tight">
                    Smoked, Packed, and Ready to Cook{" "}
                  </h3>
                  <p className="text-copy text-sm md:text-base">
                    Each order is handled to keep the fish clean, flavorful, and
                    ready for the kitchen.{" "}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 text-copy gap-5">
                <div className="bg-white p-7.5 gap-3 grid rounded-2xl">
                  <img src="/images/about/output_logo.png" width={90} alt="" />
                  <p>Trusted by customers who want steady flavor. </p>
                </div>
                <div className="bg-white p-7.5 gap-3 grid rounded-2xl">
                  <img src="/images/about/output_logo.png" width={90} alt="" />
                  <p>Built for homes, retailers, and bulk orders. </p>
                </div>
              </div>
            </article>
            <figure className="z-10">
              <img
                src="/images/home/ejakika-2.jpg"
                className="aspect-[1/0.8] w-full max-w-full object-cover rounded-xl "
              />
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}
