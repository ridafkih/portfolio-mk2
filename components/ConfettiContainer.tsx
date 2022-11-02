import React, { ReactPropTypes, useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti';

interface ConfettiContainerProps {
  x: number;
  y: number;
  duration?: number;
}

const ConfettiComponent = Confetti as unknown as React.FC<Confetti["props"]>;

const ConfettiContainer: React.FC<ConfettiContainerProps> = ({ x, y, duration = 1000 }) => {
  const [exploded, setExploded] = useState<boolean>(false);

  useEffect(() => {
    setExploded(true);
  }, [])
  
  return (
    <div
      className="fixed top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <ConfettiComponent
        config={{ duration }}
        active={exploded}
      />
    </div>
  )
}

export default ConfettiContainer