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
const INLINE_EXPAND_MS = 680;
const INLINE_SHRINK_MS = 500;
const INLINE_SWITCH_MS = 680;

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
  isExpandIntro: boolean;
  isShrinking: boolean;
  isSwitchingIn: boolean;
  isSwitchingOut: boolean;
  isAnimating: boolean;
  useInlineExpand: boolean;
  onOpen: (leader: Leader) => void;
  onClose: () => void;
  closeRef?: RefObject<HTMLButtonElement | null>;
  onShrinkComplete?: () => void;
};

function LeaderCard({
  leader,
  isExpanded,
  isExpandIntro,
  isShrinking,
  isSwitchingIn,
  isSwitchingOut,
  isAnimating,
  useInlineExpand,
  onOpen,
  onClose,
  closeRef,
  onShrinkComplete,
}: LeaderCardProps) {
  const titleId = useId();
  const closeReportedRef = useRef(false);

  const handleActivate = useCallback(() => {
    if (isAnimating || isExpanded || isShrinking) return;
    onOpen(leader);
  }, [isAnimating, isExpanded, isShrinking, leader, onOpen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (isAnimating || isExpanded || isShrinking) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onOpen(leader);
      }
    },
    [isAnimating, isExpanded, isShrinking, leader, onOpen],
  );

  const handleCellTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLElement>) => {
      if (!useInlineExpand || !isShrinking) return;
      if (event.target !== event.currentTarget) return;
      if (
        event.propertyName !== "flex-basis" &&
        event.propertyName !== "flex" &&
        event.propertyName !== "flex-grow" &&
        event.propertyName !== "width" &&
        event.propertyName !== "height"
      ) {
        return;
      }
      if (!closeReportedRef.current) {
        closeReportedRef.current = true;
        onShrinkComplete?.();
      }
    },
    [isShrinking, onShrinkComplete, useInlineExpand],
  );

  useEffect(() => {
    if (isExpanded || isShrinking) closeReportedRef.current = false;
  }, [isExpanded, isShrinking]);

  const showExpandedChrome = isExpanded || isShrinking || isSwitchingOut;

  return (
    <article
      className={`leader-card${isExpanded ? " is-expanded" : ""}${isExpandIntro ? " is-expand-intro" : ""}${isShrinking ? " is-shrinking" : ""}${isSwitchingIn ? " is-switching-in" : ""}${isSwitchingOut ? " is-switching-out" : ""}`}
      aria-labelledby={titleId}
      aria-expanded={isExpanded}
      aria-busy={isShrinking || isSwitchingIn || isSwitchingOut}
      tabIndex={isExpanded || isShrinking || isAnimating ? -1 : 0}
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
        {showExpandedChrome ? (
          <>
            <div className="leader-media-fade" aria-hidden="true" />
            {isExpanded ? (
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
            ) : null}
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
  const [isSwitching, setIsSwitching] = useState(false);
  const [switchFromIndex, setSwitchFromIndex] = useState(-1);
  const [expandIntroName, setExpandIntroName] = useState<string | null>(null);
  const isLargeScreen = useMinWidth(LG_BREAKPOINT);
  const inlineCloseRef = useRef<HTMLButtonElement>(null);
  const shrinkFallbackRef = useRef<number | null>(null);
  const switchTimerRef = useRef<number | null>(null);
  const shrinkCompleteRef = useRef(false);
  const useInlineDetail = Boolean(active && isLargeScreen && !isClosing);
  const isAnimating = Boolean(isLargeScreen && (isClosing || isSwitching));
  const activeIndex = active
    ? leadership.people.findIndex((person) => person.name === active.name)
    : -1;

  const openLeader = useCallback(
    (leader: Leader) => {
      if (!isLargeScreen) {
        setIsClosing(false);
        setIsSwitching(false);
        setExpandIntroName(leader.name);
        setActive(leader);
        return;
      }

      if (isClosing || isSwitching) return;
      if (active?.name === leader.name) return;

      if (active) {
        setSwitchFromIndex(
          leadership.people.findIndex((person) => person.name === active.name),
        );
        setExpandIntroName(null);
        setIsSwitching(true);
        setActive(leader);
        return;
      }

      setIsClosing(false);
      setIsSwitching(false);
      setExpandIntroName(leader.name);
      setActive(leader);
    },
    [active, isClosing, isSwitching, isLargeScreen, leadership.people],
  );

  const closeLeader = useCallback(() => {
    if (active && isLargeScreen) {
      setIsSwitching(false);
      setExpandIntroName(null);
      setIsClosing(true);
      return;
    }
    setActive(null);
    setIsClosing(false);
    setIsSwitching(false);
    setExpandIntroName(null);
  }, [active, isLargeScreen]);

  const handleShrinkComplete = useCallback(() => {
    if (shrinkCompleteRef.current) return;
    shrinkCompleteRef.current = true;

    if (shrinkFallbackRef.current !== null) {
      window.clearTimeout(shrinkFallbackRef.current);
      shrinkFallbackRef.current = null;
    }

    setActive(null);
    setIsClosing(false);
    setExpandIntroName(null);
  }, []);

  useEffect(() => {
    if (isClosing) shrinkCompleteRef.current = false;
  }, [isClosing]);

  useEffect(() => {
    if (!expandIntroName || !useInlineDetail) return;

    const introTimer = window.setTimeout(() => {
      setExpandIntroName(null);
    }, INLINE_EXPAND_MS + 100);

    return () => window.clearTimeout(introTimer);
  }, [expandIntroName, useInlineDetail]);

  useEffect(() => {
    if (!isClosing || !isLargeScreen || !active) return;

    shrinkFallbackRef.current = window.setTimeout(() => {
      shrinkFallbackRef.current = null;
      handleShrinkComplete();
    }, INLINE_SHRINK_MS + 80);

    return () => {
      if (shrinkFallbackRef.current !== null) {
        window.clearTimeout(shrinkFallbackRef.current);
        shrinkFallbackRef.current = null;
      }
    };
  }, [active, handleShrinkComplete, isClosing, isLargeScreen]);

  useEffect(() => {
    if (!isSwitching) return;

    switchTimerRef.current = window.setTimeout(() => {
      switchTimerRef.current = null;
      setIsSwitching(false);
      setSwitchFromIndex(-1);
    }, INLINE_SWITCH_MS + 80);

    return () => {
      if (switchTimerRef.current !== null) {
        window.clearTimeout(switchTimerRef.current);
        switchTimerRef.current = null;
      }
    };
  }, [isSwitching, active?.name]);

  useEffect(() => {
    if (!active || !isLargeScreen) return;

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeLeader();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, closeLeader, isLargeScreen]);

  useEffect(() => {
    if (!useInlineDetail) return;

    const focusDelay = expandIntroName ? INLINE_EXPAND_MS + 40 : INLINE_SWITCH_MS + 40;

    const focusTimer = window.setTimeout(() => {
      inlineCloseRef.current?.focus();
    }, focusDelay);

    return () => {
      window.clearTimeout(focusTimer);
    };
  }, [useInlineDetail, active?.name, expandIntroName]);

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
      <div className="leadership-grid-shell">
        <div
          className={`leadership-grid${active && isLargeScreen ? " has-detail" : ""}${isClosing ? " is-closing" : ""}${isSwitching ? " is-switching" : ""}${isAnimating ? " is-animating" : ""}`}
        >
          {leadership.people.map((person, index) => (
            <LeaderCard
              key={person.name}
              leader={person}
              isExpanded={useInlineDetail && active?.name === person.name}
              isExpandIntro={
                useInlineDetail &&
                active?.name === person.name &&
                expandIntroName === person.name
              }
              isShrinking={isClosing && active?.name === person.name}
              isSwitchingIn={isSwitching && useInlineDetail && active?.name === person.name}
              isSwitchingOut={isSwitching && switchFromIndex === index}
              isAnimating={isAnimating}
              useInlineExpand={isLargeScreen}
              onOpen={openLeader}
              onClose={closeLeader}
              closeRef={activeIndex === index ? inlineCloseRef : undefined}
              onShrinkComplete={
                isClosing && activeIndex === index ? handleShrinkComplete : undefined
              }
            />
          ))}
        </div>
      </div>
      <p className="leadership-note">{leadership.note}</p>
      {!isLargeScreen && active ? (
        <LeaderModal leader={active} onClose={closeLeader} />
      ) : null}
    </section>
  );
}
