import { Link } from "react-router-dom";
import { sparkleWhite } from "../../icons";
export function PageHeader({ title }: { title: string }) {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-16 md:pt-35 md:pb-37.5 bg-primary text-white">
        <h1 className="font-bold text-3xl md:text-[42px] lg:text-[56px] leading-[1.1em] text-anime-style-3">
          {title}
        </h1>
        <p className="fadeInUp">
          <Link to={"/"}>Home</Link> / {title}
        </p>
      </section>
    </div>
  );
}

export function ScrollingTicker() {
  return (
    <div className="">
      {/* <!-- Scrolling Ticker Start --> */}
      <div className="flex p-3 bg-accent text-white font-bold text-2xl overflow-hidden justify-between">
        <div className="flex gap-4 shrink-0 items-center scrolling mx-4">
          <img src={sparkleWhite} width={26} />
          <span>Carefully Smoked Fish</span>
          <img src={sparkleWhite} width={26} />
          <span>Built for Home Cooking</span>
          <img src={sparkleWhite} width={26} />
          <span>Rich Local Flavor</span>
          <img src={sparkleWhite} width={26} />
          <span>Trusted Eja Kika</span>
        </div>

        <div className="flex gap-4 shrink-0 items-center scrolling mx-4">
          <img src={sparkleWhite} width={26} />
          <span>Carefully Smoked Fish</span>
          <img src={sparkleWhite} width={26} />
          <span>Built for Home Cooking</span>
          <img src={sparkleWhite} width={26} />
          <span>Rich Local Flavor</span>
          <img src={sparkleWhite} width={26} />
          <span>Trusted Eja Kika</span>
        </div>
      </div>
    </div>
  );
}
