import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import cn from "clsx";

interface IVirtualList<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemHeight: number;
  gap: number;
  className?: string;
}

export const VirtualList = <T,>({
  items,
  renderItem,
  itemHeight,
  gap,
  className,
}: IVirtualList<T>) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  const totalHeight = items.length * (itemHeight + gap);

  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.clientHeight;
    const visibleCount = Math.ceil(containerHeight / (itemHeight + gap));
    const startIndex = Math.floor(
      containerRef.current.scrollTop / (itemHeight + gap)
    );

    setStartIndex(startIndex);
    setEndIndex(startIndex + visibleCount);
  }, [itemHeight, gap]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleItems();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [calculateVisibleItems]);

  const handleScroll = useCallback(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  const visibleItems = useMemo(
    () => items.slice(startIndex, endIndex + 1),
    [startIndex, endIndex, items]
  );

  useEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  return (
    <div
      ref={containerRef}
      className="overflow-auto max-h-full relative"
      onScroll={handleScroll}
    >
      <div
        className={cn("relative", className)}
        style={{ height: `${totalHeight}px` }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            className="absolute w-full"
            style={{
              top: `${(startIndex + index) * (itemHeight + gap)}px`,
              height: `${itemHeight}px`,
            }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
