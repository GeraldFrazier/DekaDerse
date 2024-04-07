import Link from "next/link";

interface SoundCloudPlaylistProps {
    playlistUrl: string;
  }
  const SoundCloud = ({ playlistUrl }: SoundCloudPlaylistProps) => {
    return (
    <div className="mx-auto max-w-2xl">
    <iframe
      width="100%"
      height="450"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent("https://soundcloud.com/blacknightchi/sets/rtg?si=6947d0d16db0499a8d295372df2fc489&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing")}&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true`}
    ></iframe>
    <div className="">
        {/* Adding a Link component */}
        <Link href="/Youtube">Go to YouTube</Link>

      </div>
</div>

);

};

export default SoundCloud