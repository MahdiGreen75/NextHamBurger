import Link from "next/link";
import Header from "@/components/main-header/Header";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slide-show";

export default function Home() {
  return (
    // <main>
    //   <Header></Header>
    //   <p><Link href={"/about"} className="italic">About</Link></p>
    //   {/* The above is just a <a> tag */}
    // </main>
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel food for NextLevel foodies.</h1>
            <p>Taste and share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href={"/community"}>Join the community</Link>
            <Link href={"/meals"}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
