"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

type DwgHeaderProps = {
  /** Active nav href; leave empty on the homepage so About is not forced active */
  activeHref?: string;
};

export function DwgHeader({ activeHref = "" }: DwgHeaderProps) {
  const [active, setActive] = useState(activeHref);
  const [menuOpen, setMenuOpen] = useState(false);
  const [institutionsOpen, setInstitutionsOpen] = useState(false);
  const menuId = useId();
  const institutionsMenuId = useId();
  const institutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => {
      const path = window.location.pathname.replace(/\/$/, "") || "/";

      if (path === "/our-story") {
        setActive("/our-story/");
        return;
      }

      if (path === "/about") {
        setActive("/");
        return;
      }

      if (path === "/") {
        const hash = window.location.hash;
        if (hash) {
          setActive(`/${hash}`);
          return;
        }
        setActive("/");
        return;
      }

      const hash = window.location.hash;
      if (hash) {
        setActive(`/${hash}`);
        return;
      }

      setActive(activeHref);
    };

    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [activeHref]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInstitutionsOpen(false);
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 901px)").matches) {
        setMenuOpen(false);
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (
        institutionsRef.current &&
        !institutionsRef.current.contains(e.target as Node)
      ) {
        setInstitutionsOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setInstitutionsOpen(false);
  };

  return (
    <header className={`dwg-header${menuOpen ? " is-open" : ""}`}>
      <div className="dwg-header-inner">
        <Logo priority className="logo-nav" />

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>

        <nav
          id={menuId}
          className="dwg-nav"
          aria-label="Primary"
          data-open={menuOpen ? "true" : "false"}
        >
          {siteConfig.nav.map((link) => {
            if (link.label === "Institutions") {
              const isActive = active === "/#institutions";
              return (
                <div
                  key={link.href}
                  className={`nav-dropdown${institutionsOpen ? " is-open" : ""}`}
                  ref={institutionsRef}
                  onMouseEnter={() => {
                    if (window.matchMedia("(min-width: 901px)").matches) {
                      setInstitutionsOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(min-width: 901px)").matches) {
                      setInstitutionsOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav-dropdown-trigger${isActive ? " is-active" : ""}`}
                    aria-expanded={institutionsOpen}
                    aria-controls={institutionsMenuId}
                    aria-haspopup="true"
                    onClick={() => setInstitutionsOpen((open) => !open)}
                  >
                    Institutions
                    <span className="nav-dropdown-caret" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <div
                    id={institutionsMenuId}
                    className="nav-dropdown-menu"
                    hidden={!institutionsOpen}
                  >
                    <ul className="nav-dropdown-menu-inner" role="menu">
                      {siteConfig.navInstitutions.map((item) => (
                        <li key={item.label} role="none">
                          <a
                            role="menuitem"
                            href={item.href}
                            onClick={() => {
                              setActive("/#institutions");
                              closeMenu();
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            const isActive = Boolean(active) && link.href === active;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  setActive(link.href);
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}
