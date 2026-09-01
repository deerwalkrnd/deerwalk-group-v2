"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type RefObject,
  type TransitionEvent,
} from "react";
import { LeaderModal } from "@/components/LeaderModal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteConfig, type Leader } from "@/lib/site";

const LG_BREAKPOINT = 1101;

function useMinWidth(minWidth: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${minWidth}px)`);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [minWidth]);

  return matches;
}

type LeaderCardProps = {
  leader: Leader;
  isExpanded: boolean;
  useInlineExpand: boolean;
  onOpen: (leader: Leader) => void;
  onClose: () => void;
  closeRef?: RefObject<HTMLButtonElement | null>;
  onShrinkComplete?: () => void;
};

function LeaderCard({
  leader,
  isExpanded,
  useInlineExpand,
  onOpen,
  onClose,
  closeRef,
  onShrinkComplete,
}: LeaderCardProps) {
  const titleId = useId();
  const closeReportedRef = useRef(false);

  const handleActivate = useCallback(() => {
    if (!isExpanded) onOpen(leader);
  }, [isExpanded, leader, onOpen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (isExpanded) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onOpen(leader);
      }
    },
    [isExpanded, leader, onOpen],
  );

  const handleCellTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLElement>) => {
      if (!useInlineExpand || isExpanded) return;
      if (event.target !== event.currentTarget) return;
      if (
        event.propertyName !== "flex-basis" &&
        event.propertyName !== "flex" &&
        event.propertyName !== "flex-grow" &&
        event.propertyName !== "width"
      ) {
        return;
      }
      if (!closeReportedRef.current) {
        closeReportedRef.current = true;
        onShrinkComplete?.();
      }
    },
    [isExpanded, onShrinkComplete, useInlineExpand],
  );

  useEffect(() => {
    if (isExpanded) closeReportedRef.current = false;
  }, [isExpanded]);

  return (
    <article
      className={`leader-card${isExpanded ? " is-expanded" : ""}`}
      aria-labelledby={titleId}
      aria-expanded={isExpanded}
      tabIndex={isExpanded ? -1 : 0}
      role="button"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      onTransitionEnd={useInlineExpand ? handleCellTransitionEnd : undefined}
    >
      <div className="leader-media">
        <ResponsiveImage
          src={leader.image}
          alt={leader.name}
          width={720}
          height={520}
          sizes={
            isExpanded
              ? "(max-width: 700px) 92vw, 520px"
              : "(max-width: 768px) 50vw, 220px"
          }
          className="leader-image"
          style={
            leader.imagePosition
              ? { objectPosition: leader.imagePosition }
              : undefined
          }
        />
        {isExpanded ? (
          <>
            <div className="leader-media-fade" aria-hidden="true" />
            <button
              ref={closeRef}
              type="button"
              className="leader-close"
              aria-label="Close"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
            >
              <svg
                className="leader-close-icon"
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
          </>
        ) : null}
      </div>
      <div className="leader-details">
        <div className="leader-summary">
          <h3 id={titleId}>{leader.name}</h3>
          <p className="leader-role">{leader.role}</p>
        </div>
        <div className="leader-bio-scroll" aria-hidden={!isExpanded}>
          <p className="leader-bio">{leader.bio}</p>
        </div>
      </div>
    </article>
  );
}

export function LeadershipSection() {
  const { leadership } = siteConfig;
  const [active, setActive] = useState<Leader | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const isLargeScreen = useMinWidth(LG_BREAKPOINT);
  const inlineCloseRef = useRef<HTMLButtonElement>(null);
  const useInlineDetail = Boolean(active && isLargeScreen && !isClosing);
  const activeIndex = active
    ? leadership.people.findIndex((person) => person.name === active.name)
    : -1;

  const openLeader = useCallback((leader: Leader) => {
    setIsClosing(false);
    setActive(leader);
  }, []);

  const closeLeader = useCallback(() => {
    if (active && isLargeScreen) {
      setIsClosing(true);
      return;
    }
    setActive(null);
  }, [active, isLargeScreen]);

  const finishClose = useCallback(() => {
    setActive(null);
    setIsClosing(false);
  }, []);

  useEffect(() => {
    if (!useInlineDetail) return;

    const focusTimer = window.setTimeout(() => {
      inlineCloseRef.current?.focus();
    }, 520);

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeLeader();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [useInlineDetail, closeLeader, active?.name]);

  return (
    <section
      className="leadership"
      id="leadership"
      aria-labelledby="leadership-heading"
    >
      <div className="leadership-intro">
        <h2 id="leadership-heading">{leadership.title}</h2>
        <p className="leadership-eyebrow">{leadership.eyebrow}</p>
      </div>
      <div
        className={`leadership-grid${active && isLargeScreen ? " has-detail" : ""}${isClosing ? " is-closing" : ""}`}
      >
        {leadership.people.map((person, index) => (
          <LeaderCard
            key={person.name}
            leader={person}
            isExpanded={useInlineDetail && active?.name === person.name}
            useInlineExpand={isLargeScreen}
            onOpen={openLeader}
            onClose={closeLeader}
            closeRef={activeIndex === index ? inlineCloseRef : undefined}
            onShrinkComplete={
              isClosing && activeIndex === index ? finishClose : undefined
            }
          />
        ))}
      </div>
      <p className="leadership-note">{leadership.note}</p>
      {!isLargeScreen && active ? (
        <LeaderModal leader={active} onClose={closeLeader} />
      ) : null}
    </section>
  );
}
