import { FC, useState, useEffect, useRef } from "react";

interface Props {
  name: string;
}

const OfferName: FC<Props> = ({ name }) => {
  const [showName, setShowName] = useState(false);
  const [isSingleLine, setIsSingleLine] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, offsetHeight } = containerRef.current;
      setIsSingleLine(scrollHeight <= offsetHeight);
    }
  }, [name]);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-500 ease-in-out ${
        isSingleLine ? "h-[2em]" : "overflow-hidden"
      }`}
      style={{
        maxHeight:
          showName && !isSingleLine
            ? `${containerRef.current?.scrollHeight}px`
            : "2em"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h5 key={name} className="font-semibold mb-0 flex items-center">
        {name}
      </h5>
    </div>
  );
};

export default OfferName;
