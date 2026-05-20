import { Link } from "react-router-dom";
import { useTextAnimations } from "../../../animation";
import { about1, about2, aboutImage, contactUs } from "../../../icons";

export function About() {
  useTextAnimations();

  return (
    <div className="p-4 md:px-7.5 py-12.5 grid grid-flow-row lg:grid-cols-2 gap-6 items-center">
      <SatisfactionBlock />

      <section className="md:p-5 flex flex-col gap-3 md:gap-5 font-body">
        <h3 className="subheading bg-secondary border-divider text-primary w-fit text-sm md:text-base fadeInUp">
          About us
        </h3>
        <h2 className="text-2xl md:text-[36px] lg:text-[46px] leading-[1.2em] tracking-[-0.02em] text-primary font-bold text-anime">
          Smoked fish made for real meals and repeat customers
        </h2>

        <p className="text-copy font-body fadeInUp">
          We focus on careful selection, controlled smoking, and packaging that
          helps the fish stay flavorful and ready for cooking, resale, or
          distribution.{" "}
        </p>

        <article className="grid grid-flow-row gap-5 fadeInUp">
          <div className="flex flex-col gap-4">
            <img src={about1} width={40} />
            <h3 className="font-bold text-xl text-primary">
              Selected and Smoked with Care
            </h3>
            <p className="text-copy">
              We prepare each batch with attention to freshness, texture, and
              the smoky finish customers expect from a premium product.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <img src={about2} width={40} />
            <h3 className="font-semibold text-xl text-primary">
              Ready for Families and Businesses
            </h3>
            <p className="text-copy">
              Our smoked fish is made for everyday cooking, shop shelves, and
              wholesale buyers who need steady supply and dependable taste.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export function SatisfactionBlock() {
  return (
    <article className="flex flex-col gap-5 relative">
      <div className="rounded-3xl ">
        <img
          src="/images/home/ejakika-1.jpeg"
          alt=""
          className="aspect-[1/0.578] object-cover w-full rounded-3xl "
        />
      </div>
      <div className=" grid grid-cols-2 gap-5">
        <div className="bg-secondary rounded-3xl flex flex-col justify-center md:gap-5 p-5 text-primary font-bold">
          <img src={aboutImage} width={40} className="md:w-12.5" />
          <h2 className="text-[26px] md:text-4xl ">100%</h2>
          <p className="text-primary text-sm md:text-base">Satisfaction Rate</p>
        </div>
        <div className="">
          <img
            src="/images/home/ejakika-2.jpg"
            className="h-full w-full object-cover aspect-[1/0.79] rounded-3xl"
          />
        </div>
      </div>

      <Link
        to={"/contact"}
        className="inline-block border-secondary border-8 rounded-full w-fit h-fit absolute top-[15%] bottom-0 self-center"
      >
        <img src={contactUs} className="rotation block rounded-full" />
      </Link>
    </article>
  );
}
