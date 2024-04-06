"use client"

import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import SoundCloud from "@/components/SoundCloud";
import Youtube from "@/components/Youtube";


export default function Home() {
 
  const playlistUrl = 'dekaderse';


  return (
    <main className="container mx-auto p-4">
      {/* <Header /> */}
      <LandingPage />
      {/* <SoundCloud playlistUrl= {playlistUrl} /> */}
   {/* <Youtube/> */}
   
    </main>
  );
}

