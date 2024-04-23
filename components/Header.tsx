"use client"
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggler } from './ThemeToggler'
import { useEffect } from 'react'

function Header() {
  useEffect(() => {
    // Dynamically load the YouTube Subscribe script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
        <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src={"/images/Buc.jpg"}
          width={120}
          height={100}
          alt=" BUC"
          className={"cursor-pointer invert"}
        />
      </Link>

      <div className="flex space-x-2">


<div className="g-ytsubscribe" data-channel="DekaDerse" data-layout="default" data-count="default">
<ThemeToggler /> 

</div>
      </div>
    </header>
  )
}

export default Header