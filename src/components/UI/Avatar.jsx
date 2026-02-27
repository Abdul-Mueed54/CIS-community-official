
/* ── Avatar ── */
export default function Avatar({ name, photo }) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase();
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
      />
    );
  }
  return (
    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 border-4 border-blue-50">
      <span className="text-2xl font-black text-blue-900">{initials}</span>
    </div>
  );
}