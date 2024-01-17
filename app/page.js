import Link from "next/link";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <p><Link href={"/about"} className="italic">About</Link></p>
      {/* The above is just a <a> tag */}
    </main>
  );
}
