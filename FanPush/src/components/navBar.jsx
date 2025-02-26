import {
  NotificationsOutlined,
  Search,
  VisibilityOutlined,
} from "@mui/icons-material";
import { AppBar, Avatar, Box, Typography } from "@mui/material";
import NavBarButton from "./buttons/navBarButton";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        minHeight: "3.5rem",
        paddingBlock: 1,
        paddingInline: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <Typography
        variant="h6"
        href="#Title"
        sx={{
          display: "flex",
          flexGrow: 1,
          fontWeight: 600,
        }}
      >
        FanPush
      </Typography>
      <Box display={"flex"} columnGap={3}>
        <NavBarButton icon={<Search fontSize="small" />} />
        <NavBarButton icon={<VisibilityOutlined fontSize="small" />} />
        <NavBarButton
          icon={<NotificationsOutlined fontSize="small" />}
          badge={true}
          badgeContent={3}
        />
      </Box>
      <Avatar sx={{ height: 35, width: 35, marginInlineStart: 2.5 }}>A</Avatar>
    </AppBar>
  );
}
