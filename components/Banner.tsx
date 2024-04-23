"use client"
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  // Handler for button click
  const handleClick = () => {
      router.push('/soundcloud');
    
  };

  return (
    <div className="relative bg-gray-200">
      <video autoPlay loop muted
        className="absolute z-0 w-auto min-w-full h-48 max-w-full">
        <source src="/images/bucproductions.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex justify-between items-center p-4 h-48">
        <h1 className="text-white text-xl font-bold">Deka Derse</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClick}>
Contact Us        </button>
      </div>
    </div>
  );
};

export default Banner;
