import type { SVGProps } from "react";

type IconProps = { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>;

function Svg({ size = 24, strokeWidth = 1.25, children, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ImageIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="1" />
    <circle cx="9" cy="10" r="1.6" />
    <path d="M3.5 17.5l5-5 4 4 2.5-2.5 5.5 5" />
  </Svg>
);
export const ChatIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5h16v10.5H10L5.5 19v-3.5H4z" />
    <path d="M8.5 10.3h.01M12 10.3h.01M15.5 10.3h.01" strokeWidth={2} />
  </Svg>
);
export const GuidanceIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <path d="M8 18h5.5a3 3 0 0 0 0-6h-3a3 3 0 0 1 0-6H16" />
  </Svg>
);
export const FingerprintIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 14v-3.5a7 7 0 0 1 12.5-4.3" />
    <path d="M19 10.5v3a9 9 0 0 1-1 4" />
    <path d="M8.5 19.5a9 9 0 0 0 1-4.5v-4.5a2.5 2.5 0 0 1 5 0v3" />
    <path d="M14.5 16.5a12 12 0 0 1-1.2 4" />
    <path d="M12 10.5v4.5a6 6 0 0 1-1.6 4" />
  </Svg>
);
export const DocumentScanIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4" />
    <path d="M10 11h5M10 14h5M10 17h3" />
    <path d="M4 12.5h16" strokeDasharray="1.5 2" />
  </Svg>
);
export const GaugeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 16a8.5 8.5 0 0 1 17 0" />
    <path d="M12 16l4.2-5" />
    <circle cx="12" cy="16" r="1.2" />
    <path d="M6 16h1M17 16h1M12 8.5v1" />
  </Svg>
);
export const TransferIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 9h15l-3.5-3.5" />
    <path d="M20 15H5l3.5 3.5" />
  </Svg>
);
export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 12h16M15 7l5 5-5 5" />
  </Svg>
);
export const DocumentIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4" />
    <path d="M10 11h5M10 14h5M10 17h3" />
  </Svg>
);
export const ChartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20h16" />
    <path d="M7 16v-5M12 16V7M17 16v-8" />
  </Svg>
);
