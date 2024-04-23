import React from 'react';
import Link from 'next/link';
import { SongType, SoundCloudProps } from '@/typings';
import Banner from '@/components/Banner'
;


const SoundCloud = ({ songs }: SoundCloudProps) => {
    return (
        <>
        <Banner/>
        <div className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs?.map(song => (
                <div key={song.id} className="bg-gray-100 p-4 rounded-md">
                    <iframe
                        width="100%"
                        height="200"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(song.soundcloudUrl)}&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true`}
                    ></iframe>
                    <div className="mt-2">
                        <h3 className="text-xl font-semibold">{song.title}</h3>
                        <p className="text-gray-600">{song.artist}</p>
                    </div>
                </div>
            ))}
            <div>
                <Link href="/youtube">Go to YouTube</Link>
            </div>
        </div></>
    );
};

export default SoundCloud;
