"use client";

import { useEffect } from "react";

/** About lives at `/` — keep this route as a redirect for old links */
export default function AboutPage() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return null;
}
