import { Badge, Box, Button } from "@mui/material";

export default function StytledButton(props) {
  const {
    hidden,
    onClick,
    p,
    text,
    icon,
    startIconn,
    color,
    bgColor,
    badge,
    badgecontent,
    hovercolor,
    fontWeight,
  } = props;

  return (
    <Button
      {...props}
      onClick={onClick}
      disableRipple
      variant="outlined"
      sx={{
        display: hidden ? "none" : "inherit",
        color: color,
        p: p ? p : icon ? 1.25 : startIconn ? 0.75 : 1,
        marginBlock: p && !startIconn && p * 2.25,
        borderRadius: "0.35rem",
        borderColor: "transparent",
        bgcolor: bgColor,
        "&:hover": { color: hovercolor },
      }}
    >
      {icon ? (
        <>
          {icon}
          <Badge
            color="secondary"
            badgeContent={badgecontent}
            overlap="circular"
            sx={{
              display: badge && "inherit",
              color: "#FFF",
              top: "-12px",
              right: "-6px",
            }}
          />
        </>
      ) : (
        <Box
          display={"flex"}
          alignItems={"center"}
          columnGap={1.5}
          fontWeight={fontWeight}
        >
          {startIconn}
          {text}
        </Box>
      )}
    </Button>
  );
}
