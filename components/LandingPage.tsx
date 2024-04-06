import { useEffect, useState } from 'react';

interface YouTubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

// Loading/Start Page component
const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Loading...</h1>
    </div>
  );
};

// Main Content component
const MainContent = ({ data }: { data: YouTubePlaylistItem[] }) => {
  return (
    <main className="container mx-auto p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(({ id, snippet }) => {
          const { title, thumbnails, resourceId } = snippet;
          const { medium } = thumbnails;
          
          return (
            <li key={id} className="bg-white rounded-lg shadow-md">
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} className="block p-4">
                <div className="mb-4">
                  <img className="w-full h-auto" src={medium.url} alt={title} width={medium.width} height={medium.height} />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

// Youtube component
const YoutubeOpen = () => {
    const [data, setData] = useState<YouTubePlaylistItem[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const PLAYLIST_ID = 'PLjXG2-PnFnQbSEbLrDTSwPw5MzA2NS8ud';
  
        try {
          const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
          
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const fetchedData = await res.json();
          setData(fetchedData.items);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data. Please try again later.');
        } finally {
          setLoading(false); // Set loading state to false when data fetching is completed (regardless of success or failure)
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-10">
        {loading ? <LoadingPage /> : (error ? <p className="text-red-500">{error}</p> : <MainContent data={data!} />)}
      </div>
    );
  };
  
  export default YoutubeOpen;
  