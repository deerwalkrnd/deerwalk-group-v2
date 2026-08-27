"use client";

import { useEffect, useId, useRef } from "react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { Leader } from "@/lib/site";

type LeaderModalProps = {
  leader: Leader | null;
  onClose: () => void;
};

function isInsideScrollableModal(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  const body = target.closest(".leader-modal-body");
  if (!body) return false;
  return body.scrollHeight > body.clientHeight;
}

export function LeaderModal({ leader, onClose }: LeaderModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!leader) return;

    closeRef.current?.focus();

    const blockBackgroundScroll = (e: WheelEvent | TouchEvent) => {
      if (isInsideScrollableModal(e.target)) return;
      e.preventDefault();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (keys.includes(e.key) && !isInsideScrollableModal(e.target)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", blockBackgroundScroll, { passive: false });
    window.addEventListener("touchmove", blockBackgroundScroll, {
      passive: false,
    });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", blockBackgroundScroll);
      window.removeEventListener("touchmove", blockBackgroundScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [leader, onClose]);

  if (!leader) return null;

  return (
    <div
      className="leader-modal-root"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="leader-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
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
      </div>
    </div>
  );
}
