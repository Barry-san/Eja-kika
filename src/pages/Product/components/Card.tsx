import { cart } from "../../../icons";

export function ProductCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="flex flex-col gap-4 p-4 rounded-2xl bg-white relative group">
      <figure className="mx-auto">
        <img
          src={image}
          alt={description + " image"}
          className="max-w-56 md:max-w-100"
        />
      </figure>
      <div className="flex flex-col gap-2 text-primary font-bold text-2xl text-[20px] font-body">
        <h3>{title}</h3>
        <div>
          <i className="rating mr-1"></i>
          <i className="rating mr-1"></i>
          <i className="rating mr-1"></i>
          <i className="rating mr-1"></i>
          <i className="rating mr-1"></i>
        </div>

        <p>{description}</p>
      </div>
      <div className="absolute w-full flex justify-center items-center top-0 bottom-0">
        <a
          href="https://wa.me/+16476790341?text=Hi%2C%20I%20want%20to%20buy%20your%20product."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-accent font-bold text-white flex p-4 gap-2 opacity-0 translate-y-1/2 group-hover:translate-0 group-hover:opacity-100 transition-all"
        >
          Buy now
          <img src={cart} />
        </a>
      </div>
    </article>
  );
}
