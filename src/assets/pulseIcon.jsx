import { SvgIcon } from "@mui/material";

export default function PulseIcon() {
  return (
    <SvgIcon sx={{ p: 0.3, m: -0.25 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svgFillIcon"
        fill="#777777"
        viewBox="0 0 256 256"
        strokeWidth={7}
        stroke="#777777"
      >
        <path d="M238 128a6 6 0 0 1-6 6h-28.29l-38.34 76.68A6 6 0 0 1 160 214h-.3a6 6 0 0 1-5.31-3.85L95.51 55.57l-34.05 74.91A6 6 0 0 1 56 134H24a6 6 0 0 1 0-12h28.14l38.4-84.48a6 6 0 0 1 11.07.34l59.13 155.24l33.89-67.78A6 6 0 0 1 200 122h32a6 6 0 0 1 6 6" />
      </svg>
    </SvgIcon>
  );
}
