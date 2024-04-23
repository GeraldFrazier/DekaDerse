import Banner from "@/components/Banner";
import Link from "next/link";





export default function Home() {
 


  return (
    <main className="container mx-auto p-4">
     <Banner/>
     <h2>
        <Link href="/soundcloud">Enter</Link>
      </h2>
   
    </main>
  );
}

