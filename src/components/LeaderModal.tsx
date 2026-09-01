"use client";

import { useEffect, useRef } from "react";
import { LeaderDetailCard } from "@/components/LeaderDetailCard";
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
      <div className="leader-modal" role="dialog" aria-modal="true">
        <LeaderDetailCard
          leader={leader}
          onClose={onClose}
          closeRef={closeRef}
        />
      </div>
    </div>
  );
}
