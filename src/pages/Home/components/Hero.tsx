import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="grid grid-flow-row lg:grid-cols-2 bg-primary min-h-[80vh] gap-6 font-body">
      <article className="flex flex-col justify-center md:py-5 px-5 lg:px-7.5 gap-5 text-white">
        <h3 className="subheading bg-divider w-fit">Adea Smoked Fish </h3>

        <h1 className="max-w-xl text-[28px] md:text-[36px] lg:text-[46px] leading-[1.2em] tracking-tight font-bold ">
          Premium smoked fish for households, retailers, and wholesale buyers
        </h1>

        <p>
          We prepare smoked fish with a refined finish, dependable supply, and
          pack sizes suited to everyday cooking, retail shelves, and wholesale
          accounts.{" "}
        </p>

        <Link
          to={"/products"}
          className="capitalize px-3.75 py-3.5 bg-accent w-fit rounded-xl inline-flex items-center gap-5 font-bold"
        >
          order now
          <img src="src/assets/icons/arrow-white.svg" height={22} width={22} />
        </Link>
      </article>
      <div className="flex items-center px-10">
        <img src="/hero.png" alt="Hero Image" />
      </div>
    </div>
  );
}
