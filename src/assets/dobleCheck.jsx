import { SvgIcon } from "@mui/material";

export default function DoubleCheck() {
  return (
    <SvgIcon sx={{ p: 0.3 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1f8069"
        strokeWidth="2"
        className="svgStrokeIcon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
        />
      </svg>
    </SvgIcon>
  );
}
