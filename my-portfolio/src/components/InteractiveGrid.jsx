import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = `${(event.clientX / window.innerWidth) * 100}%`;
      const y = `${(event.clientY / window.innerHeight) * 100}%`;
      gridRef.current?.style.setProperty("--mx", x);
      gridRef.current?.style.setProperty("--my", y);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div ref={gridRef} className="interactive-grid" aria-hidden="true" />;
}
