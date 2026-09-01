"use client";

import { useEffect, useId, useRef } from "react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { Institution } from "@/lib/site";

type InstitutionModalProps = {
  item: Institution | null;
  onClose: () => void;
};

function isInsideScrollableModal(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  const body = target.closest(".institution-modal-body");
  if (!body) return false;
  return body.scrollHeight > body.clientHeight;
}

export function InstitutionModal({ item, onClose }: InstitutionModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;

    closeRef.current?.focus();

    // Keep the page scrollbar (no left/right jump). Only block background scrolling.
    const blockBackgroundScroll = (e: WheelEvent | TouchEvent) => {
      if (isInsideScrollableModal(e.target)) return;
      e.preventDefault();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
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
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="institution-modal-root"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="institution-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="institution-modal-media">
          <ResponsiveImage
            src={item.image}
            alt=""
            width={1043}
            height={330}
            sizes="(max-width: 700px) 92vw, 988px"
            className="institution-modal-image"
          />
          <button
            ref={closeRef}
            type="button"
            className="institution-modal-close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              className="institution-modal-close-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M5.5 5.5l13 13M18.5 5.5l-13 13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="institution-modal-body">
          <h3 id={titleId}>{item.name}</h3>
          <p>{item.detail}</p>
          <a
            className="institution-modal-link"
            href={item.href}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {item.linkLabel ?? "Visit the Website"}
          </a>
        </div>
      </div>
    </div>
  );
}
