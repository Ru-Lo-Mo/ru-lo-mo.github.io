import { useState } from "react";
import TBSLightbox from "./TBSLightbox"

export default function TBSGallery({ images }) {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 md:gap-10">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={() => setActive(src)}
            className="h-20 md:h-80 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      <div>
        <TBSLightbox active={active} setActive={setActive}/>
      </div>
    </div>
  );
}