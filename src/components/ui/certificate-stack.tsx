// components/ui/certificate-stack.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CardItem {
  id?: number;
  imgUrl?: string;
  alt?: string;
  linkUrl?: string;
  issuer?: string;
  title?: string;
  description?: string;
}

interface CertificateStackProps {
  cards: CardItem[];
}

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
};

const enterAnimation = {
  y: -16,
  scale: 0.9,
};

function CertificateCardContent({ card }: { card: CardItem }) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10 bg-gradient-to-br from-[#233B6E] to-[#1a2d4e]">
        <div className="flex flex-col items-center justify-center p-4 text-white text-center">
          {card.issuer && (
            <p className="text-xs uppercase tracking-wider text-white/80">{card.issuer}</p>
          )}
          {card.title && (
            <h3 className="mt-1 text-lg font-bold leading-tight">{card.title}</h3>
          )}
          {card.description && (
            <p className="mt-1 text-sm text-white/80 line-clamp-2">{card.description}</p>
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-foreground">{card.title}</span>
          <span className="text-muted-foreground">{card.issuer}</span>
        </div>
        {card.linkUrl && (
          <a
            href={card.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-foreground pl-4 pr-3 text-sm font-medium text-background hover:bg-foreground/90"
          >
            View
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              <path d="M9.5 18L15.5 12L9.5 6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: CardItem;
  index: number;
  isAnimating: boolean;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;

  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : undefined;

  return (
    <motion.div
      key={card.id || card.title}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-border bg-card p-1 shadow-lg will-change-transform sm:w-[512px]"
    >
      <CertificateCardContent card={card} />
    </motion.div>
  );
}

export default function CertificateStack({ cards }: CertificateStackProps) {
  // Debug: if no cards, show message
  if (!cards || cards.length === 0) {
    return <div className="p-8 text-center text-red-500">No certificates found</div>;
  }

  const [stackCards, setStackCards] = useState(cards.slice(0, 3));
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(3);

  const handleAnimate = () => {
    if (isAnimating || cards.length <= 3) return;
    setIsAnimating(true);

    const nextCard = cards[currentIndex % cards.length];
    setStackCards([...stackCards.slice(1), nextCard]);
    setCurrentIndex((prev) => prev + 1);
    setIsAnimating(false);
  };

  const showAnimateButton = cards.length > 3;

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence initial={false}>
          {stackCards.map((card, index) => (
            <AnimatedCard
              key={card.id || card.title}
              card={card}
              index={index}
              isAnimating={isAnimating}
            />
          ))}
        </AnimatePresence>
      </div>

      {showAnimateButton && (
        <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-border py-4">
          <button
            onClick={handleAnimate}
            className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-border bg-background px-3 font-medium text-secondary-foreground transition-all hover:bg-secondary/80 active:scale-[0.98]"
          >
            Next Certificate
          </button>
        </div>
      )}
    </div>
  );
}