import PlaylistCarousel from "../YoutubePlaylists/PlaylistCarousel";

const PLAYLISTS = [
  {
    id: "alumni-sessions",
    title: "Alumni Live Sessions",
    playlistId: "PL2IsYilvtOmcTaCrdPWhOPMp1E-7_Em87",
  },
  {
    id: "fydp-tour",
    title: "FYDP Tour",
    playlistId: "PL2IsYilvtOmeNwas3E9Co27QFKfndea-s",
  },
  {
    id: "scholarship-masters",
    title: "Scholarship Masters",
    playlistId: "PL2IsYilvtOme8-n1TRiRxH9QNeMcgn8ut",
  },
  {
    id: "coders-arena",
    title: "Coders Arena",
    playlistId: "PL2IsYilvtOmeraH-sgTVVUFmoYy4Rt6zI",
  },
  
];

export default function Event() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-blue-900 mb-2">Events</h1>
        <p className="text-gray-500 mb-10 text-lg">Relive our community sessions and showcases.</p>

        {PLAYLISTS.map((pl) => (
          <PlaylistCarousel key={pl.id} playlist={pl} />
        ))}
      </div>
    </div>
  );
}

