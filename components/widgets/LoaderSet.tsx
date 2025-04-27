import { Emotion, EmotionName } from "../../lib/data/emotion";
import React, { useMemo, useRef, useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Loader } from "./Loader";

type LoaderProps = {
  className?: string;
  emotions: Emotion[];
  emotionNames: EmotionName[];
  numLevels: number;
};

// Row renderer for the virtualized list
type RowProps = {
  index: number;
  style: React.CSSProperties;
  data: {
    emotions: Emotion[];
    emotionNames: EmotionName[];
    numLevels: number;
  };
};

const EmotionRow = React.memo(({ index, style, data }: RowProps) => {
  const { emotions, emotionNames, numLevels } = data;
  const emotionName = emotionNames[index];
  
  return (
    <div style={style}>
      <Loader emotions={emotions} emotionName={emotionName} numLevels={numLevels} />
    </div>
  );
});

export const LoaderSet = React.memo(function LoaderSet({ className, emotions, emotionNames, numLevels = 5 }: LoaderProps) {
  className = className || "";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  // Calculate container dimensions on mount and window resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    
    // Initial measurement
    updateWidth();
    
    // Re-measure on resize
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  // Memoize the data passed to list items
  const itemData = useMemo(() => ({
    emotions,
    emotionNames,
    numLevels
  }), [emotions, emotionNames, numLevels]);

  // Either render two columns side-by-side, or a single column list
  return (
    <div className={`${className}`} ref={containerRef}>
      {containerWidth > 0 && (
        <List
          height={400} // Fixed height for the virtualized area
          width={containerWidth}
          itemCount={emotionNames.length}
          itemSize={32} // Height of each emotion row
          itemData={itemData}
        >
          {EmotionRow}
        </List>
      )}
    </div>
  );
});
