import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  header?: React.ReactNode;   // pass your existing Header here
  footer?: React.ReactNode;   // pass your existing Footer here
  className?: string;         // extra classes for <main>
};

export default function PageLayout({ children, header, footer, className = "" }: Props) {
  const headerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const docEl = document.documentElement;

    const setVars = () => {
      const hh = headerRef.current?.offsetHeight ?? 0;
      const fh = footerRef.current?.offsetHeight ?? 0;
      docEl.style.setProperty("--header-h", `${hh}px`);
      docEl.style.setProperty("--footer-h", `${fh}px`);
      
      // Update safe areas in case device changes orientation
      const computedStyle = getComputedStyle(docEl);
      const safeTop = computedStyle.getPropertyValue("--safe-top") || "0px";
      const safeBottom = computedStyle.getPropertyValue("--safe-bottom") || "0px";
      docEl.style.setProperty("--safe-top", safeTop);
      docEl.style.setProperty("--safe-bottom", safeBottom);
    };

    setVars();
    const ro = new ResizeObserver(setVars);
    if (headerRef.current) ro.observe(headerRef.current);
    if (footerRef.current) ro.observe(footerRef.current);

    const onResize = () => setVars();
    window.addEventListener("resize", onResize);

    // Update --vh on resize/orientation for older browsers (optional)
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("resize", setVH);
    };
  }, []);

  return (
    <>
      {header ? (
        <header ref={node => (headerRef.current = node as HTMLElement)}>{header}</header>
      ) : null}

      <main className={`page ${className}`}>{children}</main>

      {footer ? (
        <footer ref={node => (footerRef.current = node as HTMLElement)}>{footer}</footer>
      ) : null}
    </>
  );
}

