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
    <article className="flex flex-col gap-4 p-4 rounded-2xl bg-white">
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
    </article>
  );
}
