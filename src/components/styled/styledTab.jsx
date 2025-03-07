import { Tab } from "@mui/material";

export default function StyledTab(props) {
  const {
    p,
    width,
    border,
    b_radius,
    color,
    selectedcolor,
    selectedbgcolor,
    hovercolor,
    hoverbgcolor,
    selectedboxshadow,
  } = props;
  return (
    <Tab
      {...props}
      disableRipple
      sx={{
        p: p,
        margin: hoverbgcolor && "0px 0.5rem 0px 0px",
        borderRadius: b_radius,
        width: width,
        color: color,
        border: "1px solid " + border,
        "&.Mui-selected": {
          border: "none",
          bgcolor: selectedbgcolor,
          color: selectedcolor,
          boxShadow: selectedboxshadow,
          "&:hover": {
            color: hovercolor,
            bgcolor: hoverbgcolor,
          },
        },
      }}
    />
  );
}
