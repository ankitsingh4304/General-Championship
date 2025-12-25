// src/components/GameCard.tsx

import React from "react";
import type { Sport } from "../../utils/bestPlayer";

interface GameCardProps {
  game: Sport;
  onClick: (game: Sport) => void;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick, className }) => {
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
        border border-white/10
        bg-neutral-900
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <div className={`relative w-full h-56 overflow-hidden ${className}`}>
        <picture>
          <source srcSet={webp} type="image/webp" />
          <source srcSet={jpg} type="image/jpeg" />
          <img
            src={jpg}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-110
            "
          />
        </picture>

        {/* DARK GRADIENT FOR TEXT CONTRAST */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      </div>

      {/* TITLE */}
      <div className="absolute bottom-4 left-5 right-5 z-10">
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
