// pages/splash.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to redirect to home page after a certain duration (e.g., 3 seconds)
    const redirectHome = () => {
      router.push('/soundcloud');
    };

    const timeout = setTimeout(redirectHome, 11000); // Redirect after 3 seconds (adjust as needed)

    // Clean up the timer when component unmounts
    return () => clearTimeout(timeout);
  }, [router]);

  return (
  
    <div>
             <h1 className='justify center'>Deka Derse</h1>

      <video id="splash-video" autoPlay muted loop>
        <source src="/images/bucproductions.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
