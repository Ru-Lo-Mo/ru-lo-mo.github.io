import { useEffect } from "react";

export default function TBSLightbox({ active, setActive }) {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      onClick={() => setActive(null)}
      className="fixed inset-0 bg-black/80 flex items-center justify-center"
    >
      <img src={active} className="max-h-[90vh] max-w-[90vw]" />
    </div>
  );
}