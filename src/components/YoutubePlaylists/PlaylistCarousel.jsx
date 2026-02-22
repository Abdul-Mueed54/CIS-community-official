import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import usePlaylist from "./usePlaylist";


export default function PlaylistCarousel({ playlist }) {
  const { title, playlistId } = playlist;
  const { videos, loading, error } = usePlaylist(playlistId);
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  if (loading) return (
    <div className="mb-10">
      <h2 className="text-2xl font-black text-blue-900 mb-4">{title}</h2>
      <p className="text-gray-400">Loading...</p>
    </div>
  );

  if (error) return (
    <div className="mb-10">
      <h2 className="text-2xl font-black text-blue-900 mb-4">{title}</h2>
      <p className="text-red-400">Error: {error}</p>
    </div>
  );

  return (
    <div className="mb-12">
      {/* Title + arrows */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-black text-blue-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-blue-100 hover:text-blue-900 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-blue-100 hover:text-blue-900 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {videos.map((video) => {
          const { title: vTitle, thumbnails, resourceId } = video.snippet;
          const thumb = thumbnails?.medium?.url || thumbnails?.default?.url;
          const href = `https://www.youtube.com/watch?v=${resourceId?.videoId}`;

          return (
            <a
              key={video.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-64 bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <img
                src={thumb}
                alt={vTitle}
                className="w-full rounded-t-2xl object-cover"
                style={{ aspectRatio: "16/9" }}
              />
              <p className="p-3 text-sm font-medium text-gray-700 line-clamp-2">{vTitle}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}