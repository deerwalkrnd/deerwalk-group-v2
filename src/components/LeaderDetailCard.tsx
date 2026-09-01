"use client";

import { useId, type AnimationEvent, type RefObject } from "react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { Leader } from "@/lib/site";

type LeaderDetailCardProps = {
  leader: Leader;
  onClose: () => void;
  closeRef?: RefObject<HTMLButtonElement | null>;
  className?: string;
  onAnimationEnd?: (event: AnimationEvent<HTMLElement>) => void;
};

export function LeaderDetailCard({
  leader,
  onClose,
  closeRef,
  className = "",
  onAnimationEnd,
}: LeaderDetailCardProps) {
  const titleId = useId();

  return (
    <article
      className={`leader-detail-card ${className}`.trim()}
      aria-labelledby={titleId}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="leader-modal-media">
        <ResponsiveImage
          src={leader.image}
          alt={leader.name}
          width={720}
          height={520}
          sizes="(max-width: 700px) 92vw, 520px"
          className="leader-modal-image"
          style={
            leader.imagePosition
              ? { objectPosition: leader.imagePosition }
              : undefined
          }
        />
        <div className="leader-modal-media-fade" aria-hidden="true" />
        <button
          ref={closeRef}
          type="button"
          className="leader-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg
            className="leader-modal-close-icon"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M5.5 5.5l13 13M18.5 5.5l-13 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="leader-modal-body">
        <h3 id={titleId}>{leader.name}</h3>
        <p className="leader-modal-role">{leader.role}</p>
        <p className="leader-modal-bio">{leader.bio}</p>
      </div>
    </article>
  );
}
