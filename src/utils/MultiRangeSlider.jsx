/* eslint-disable react/prop-types */
"use client";

import * as React from "react";
import { cn } from "../utils/utils";

export function DoubleSlider({
  min = 0,
  max = 100,
  step = 1,
  value = [min, max],
  onValueChange,
  className,
  symbol = "$",
  disabled = false,
}) {
  const [localValue, setLocalValue] = React.useState(value);
  const [isDragging, setIsDragging] = React.useState(null);
  const sliderRef = React.useRef(null);

  React.useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const getPercentage = (val) => ((val - min) / (max - min)) * 100;

  const getValueFromPosition = React.useCallback(
    (clientX) => {
      if (!sliderRef.current) return min;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width)
      );
      const rawValue = min + percentage * (max - min);
      return Math.round(rawValue / step) * step;
    },
    [min, max, step]
  );

  const handleMouseDown = (index) => (e) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(index);
  };

  const handleMouseMove = React.useCallback(
    (e) => {
      if (isDragging === null || disabled) return;

      const newValue = getValueFromPosition(e.clientX);
      const newValues = [...localValue];
      const minDistance = step * 2; // Minimum distance between handles

      if (isDragging === 0) {
        newValues[0] = Math.min(newValue, localValue[1] - minDistance);
      } else {
        newValues[1] = Math.max(newValue, localValue[0] + minDistance);
      }

      setLocalValue(newValues);
      onValueChange?.(newValues);
    },
    [
      isDragging,
      disabled,
      getValueFromPosition,
      localValue,
      step,
      onValueChange,
    ]
  );

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(null);
  }, []);

  React.useEffect(() => {
    if (isDragging !== null) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleKeyDown = (index) => (e) => {
    if (disabled) return;

    let newValue = localValue[index];
    const minDistance = step * 2;

    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        newValue = Math.max(min, newValue - step);
        break;
      case "ArrowRight":
      case "ArrowUp":
        newValue = Math.min(max, newValue + step);
        break;
      case "Home":
        newValue = min;
        break;
      case "End":
        newValue = max;
        break;
      default:
        return;
    }

    e.preventDefault();
    const newValues = [...localValue];

    if (index === 0) {
      newValues[0] = Math.min(newValue, localValue[1] - minDistance);
    } else {
      newValues[1] = Math.max(newValue, localValue[0] + minDistance);
    }

    setLocalValue(newValues);
    onValueChange?.(newValues);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={sliderRef}
        className="relative h-1 w-full rounded-full bg-gray-200 cursor-pointer"
      >
        {/* Track between handles */}
        <div
          className="absolute h-1 rounded-full bg-black transition-all duration-200 ease-out"
          style={{
            left: `${getPercentage(localValue[0])}%`,
            width: `${getPercentage(localValue[1]) - getPercentage(localValue[0])}%`,
          }}
        />

        {/* Left handle */}
        <div
          className={cn(
            "absolute top-1/2 h-5 w-5 -translate-x-1/2  -translate-y-1/2 rounded-full border-2 border-black bg-white shadow-md transition-all duration-200 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            isDragging === 0 && "scale-110",
            disabled && "cursor-not-allowed opacity-50"
          )}
          style={{ left: `${getPercentage(localValue[0])}%` }}
          onMouseDown={handleMouseDown(0)}
          onKeyDown={handleKeyDown(0)}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={localValue[1]}
          aria-valuenow={localValue[0]}
          aria-label="Minimum value"
        />

        {/* Right handle */}
        <div
          className={cn(
            "absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-white shadow-md transition-all duration-200 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            isDragging === 1 && "scale-110",
            disabled && "cursor-not-allowed opacity-50"
          )}
          style={{ left: `${getPercentage(localValue[1])}%` }}
          onMouseDown={handleMouseDown(1)}
          onKeyDown={handleKeyDown(1)}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-valuemin={localValue[0]}
          aria-valuemax={max}
          aria-valuenow={localValue[1]}
          aria-label="Maximum value"
        />
        {/* Handle Labels */}
        {(() => {
          const leftPos = getPercentage(localValue[0]);
          const rightPos = getPercentage(localValue[1]);
          const distance = rightPos - leftPos;
          const minLabelDistance = 15; // Minimum percentage distance to prevent overlap

          if (distance < minLabelDistance) {
            // Show combined label when handles are too close
            const midPos = (leftPos + rightPos) / 2;
            return (
              <div
                className="absolute top-6 text-xs font-medium text-stone-800 bg-stone-200 px-3 py-1 rounded-full transition-all duration-200 ease-out whitespace-nowrap"
                style={{
                  left: `${midPos}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {localValue[0]}
                {symbol} - {localValue[1]}
                {symbol}
              </div>
            );
          }

          // Show separate labels when handles are far enough apart
          return (
            <>
              <div
                className="absolute top-6 text-xs font-medium text-stone-800 bg-stone-200 px-3 py-1 rounded-full transition-all duration-200 ease-out"
                style={{
                  left: `${leftPos}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {localValue[0]}
                {symbol}
              </div>

              <div
                className="absolute top-6 text-xs font-medium text-stone-800 bg-stone-200 px-3 py-1 rounded-full transition-all duration-200 ease-out"
                style={{
                  left: `${rightPos}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {localValue[1]}
                {symbol}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}
