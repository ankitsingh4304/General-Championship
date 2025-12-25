// src/components/GameCard.tsx

import React from "react";
import type { Sport } from "../../utils/bestPlayer";

interface GameCardProps {
  game: Sport;
  onClick: (game: Sport) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  const { title, webp, image } = game;
  const jpg = image;

  return (
    <div
      onClick={() => onClick(game)}
      className="
        sport-card
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-3xl
        bg-neutral-900
        border border-white/10
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* IMAGE (ANIMATED ONLY) */}
      <div className="relative w-full h-56 overflow-hidden cursor-target">
        <picture>
          <source srcSet={webp} type="image/webp" />
          <source srcSet={jpg} type="image/jpeg" />
          <img
            src={jpg}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-110
            "
          />
        </picture>

        {/* DARK GRADIENT (NO BLUR) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      </div>

      {/* TEXT (CRISP & SHARP) */}
      <div className="absolute bottom-4 left-5 right-5 z-10 pointer-events-none">
        <h2
          className="
            font-brave81
            text-xl
            font-semibold
            tracking-wider
            text-amber-200
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]
          "
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GameCard;
