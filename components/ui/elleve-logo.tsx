import React from "react";

interface ElleveLogoProps {
  variant?: "wordmark" | "badge" | "hero";
  subtitle?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export function ElleveLogo({
  variant = "wordmark",
  subtitle = true,
  className = "",
  theme = "dark",
}: ElleveLogoProps) {
  const isDark = theme === "dark";

  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Squircle Badge with stacked 'elle / ve.' */}
        <div
          className={`relative flex flex-col justify-center items-center px-3 py-2 rounded-2xl border ${
            isDark
              ? "bg-[#101010] border-white/20 text-[#EEE1CC]"
              : "bg-white border-black/15 text-[#101010]"
          } shadow-sm`}
          style={{ width: "54px", height: "54px" }}
        >
          <span className="font-display font-medium text-[16px] leading-[0.9] tracking-tight">
            elle
          </span>
          <span className="font-display font-medium text-[16px] leading-[0.9] tracking-tight pl-2">
            ve<span className="text-[#F51C25] font-bold">.</span>
          </span>
        </div>

        {subtitle && (
          <div className="flex flex-col text-left font-sans">
            <span
              className={`text-[11px] font-normal leading-tight tracking-wide ${
                isDark ? "text-cream/90" : "text-ink/90"
              }`}
            >
              arquitetura e urbanismo
            </span>
            <span
              className={`text-[11px] font-normal leading-tight tracking-wide ${
                isDark ? "text-cream/70" : "text-ink/70"
              }`}
            >
              engenharia civil
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        {/* Monumental Official Elleve Brand Display */}
        <div className="flex items-baseline">
          <span className="font-display font-light text-[15vw] sm:text-[13vw] md:text-[11vw] tracking-tighter text-cream leading-[0.85] lowercase">
            elleve
          </span>
          <span className="font-display font-bold text-[14vw] sm:text-[12vw] md:text-[10vw] text-[#F51C25] leading-none">
            .
          </span>
        </div>

        {subtitle && (
          <div className="flex items-center gap-3 mt-3">
            <span className="h-px w-8 bg-cream/30" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cream/75">
              Ambientes Que Elevam
            </span>
            <span className="h-px w-8 bg-cream/30" />
          </div>
        )}
      </div>
    );
  }

  // Default Wordmark variant
  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-baseline">
        <span
          className={`font-display font-normal text-2xl tracking-tighter lowercase ${
            isDark ? "text-cream" : "text-ink"
          }`}
        >
          elleve
        </span>
        <span className="font-display font-bold text-2xl text-[#F51C25] leading-none">
          .
        </span>
      </div>

      {subtitle && (
        <span
          className={`text-[8.5px] uppercase tracking-[0.25em] font-mono -mt-0.5 ${
            isDark ? "text-cream/60" : "text-ink/60"
          }`}
        >
          ambientes que elevam
        </span>
      )}
    </div>
  );
}
