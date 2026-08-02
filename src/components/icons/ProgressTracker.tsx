import { BrandIcon } from "@/components/icons/BrandIcon";
import type { IconProps } from "@/components/icons/types";

interface ProgressTrackerProps extends IconProps {
  progress?: number;
  segments?: number;
}

/** Brand progress icon + soft segment bar for quiz step state */
export function ProgressTracker({
  className,
  size = 24,
  title,
  variant = "default",
  progress = 0.33,
  segments = 3,
}: ProgressTrackerProps) {
  const activeCount = Math.max(
    0,
    Math.min(segments, Math.round(progress * segments)),
  );

  return (
    <div className={`progress-tracker ${className ?? ""}`}>
      <BrandIcon
        name="progressTracker"
        size={size}
        title={title}
        variant={variant}
        className="progress-tracker__mark"
      />
      <div className="progress-tracker__segments" aria-hidden="true">
        {Array.from({ length: segments }).map((_, index) => (
          <span
            key={index}
            className={`progress-tracker__segment${
              index < activeCount ? " is-active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
