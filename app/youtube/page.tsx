// pages/youtube.tsx
"use client"
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

export default function Youtube() {
  const [data, setData] = useState<YouTubePlaylistItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/youtube');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await res.json();
        setData(fetchedData.items);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <main className="container mx-auto p-4">
      {selectedVideo && (
        <div className="mb-8">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map(({ id, snippet }) => {
            const { title, thumbnails, resourceId } = snippet;
            const { medium } = thumbnails;
            
            return (
              <li key={id} className="bg-white rounded-lg shadow-md" onClick={() => handleVideoSelect(resourceId.videoId)}>
                <div className="block p-4">
                  <div className="mb-4">
                    <img className="w-full h-auto" src={medium.url} alt={title} width={medium.width} height={medium.height} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
