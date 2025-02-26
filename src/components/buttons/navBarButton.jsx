import { Badge, Button } from "@mui/material";

export default function NavBarButton({ icon, badge, badgeContent }) {
  return (
    <Button
      variant="container"
      sx={{
        minWidth: 0,
        p: 1,
        color: "#FFFFFFD7",
        lineHeight: 0,
        "&:hover": {
          color: "black",
          backgroundColor: "#1f977c",
        },
      }}
    >
      {icon}
      <Badge
        color="secondary"
        badgeContent={badgeContent}
        overlap="circular"
        sx={{
          display: badge ? "inherit" : "none",
          color: "#FFFFFFD7",
          top: "-12px",
          right: "-6px",
        }}
      />
    </Button>
  );
}
