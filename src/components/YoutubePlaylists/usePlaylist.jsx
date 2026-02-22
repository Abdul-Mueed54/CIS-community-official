import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_YT_API_KEY;


export default function usePlaylist(playlistId) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiKey  || !playlistId ) {
      
      setLoading(false);
      return;
    }
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${apiKey}`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error.message);
        setVideos(data.items || []);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [playlistId]);

  return { videos, loading, error };
}