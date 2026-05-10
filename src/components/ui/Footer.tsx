import { NavLink } from "react-router-dom";
import { phone } from "../../icons";

export function Footer() {
  return (
    <footer className="flex flex-col justfiy-between bg-primary text-white pt-5 md:pt-24 gap-5 font-copy">
      <div className="grid grid-flow-row md:grid-rows-2 lg:grid-cols-3 items-center p-2 md:p-7.5">
        <article className="flex flex-col p-4 gap-6">
          <img src={"/logo.png"} width={175} />
          <p>
            Eja Kika offers smoked fish with dependable taste, clean handling,
            and consistent quality for households, retailers, and wholesale
            buyers.
          </p>
        </article>

        <div className="grid md:grid-cols-2 lg:col-span-2">
          <section className="px-4">
            <h2 className="mb-5 text-lg font-semibold">Quick links</h2>
            <nav>
              <ul className="list-disc flex flex-col pl-5 gap-4  marker:text-accent">
                <li className=" list-disc capitalize">
                  <NavLink to={"/"} className={" list-disc"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>about us</NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>products</NavLink>
                </li>
                <li className="">
                  <NavLink to={"/contact"}>contact us</NavLink>
                </li>
              </ul>
            </nav>
          </section>

          <section className="flex flex-col gap-5 p-4">
            <h2 className="font-semibold text-lg">Contact Information</h2>

            <p className="border-b border-divider pb-4">
              From retail packs to bulk supply, we keep the flavor steady and
              the ordering simple.
            </p>

            <div className="flex items-center gap-2.5">
              <img
                src={phone}
                className="border p-2 rounded-full border-divider"
              />
              <a href={"tel:+16476790341"}>+1 (647) 679-0341</a>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-[#ffffff1a] py-5 md:px-8.5 w-full text-center ">
        <p className="md:text-lg font-medium">
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
