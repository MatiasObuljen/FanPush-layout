import {
  NotificationsOutlined,
  Search,
  VisibilityOutlined,
} from "@mui/icons-material";
import { AppBar, Avatar, Box, Typography } from "@mui/material";
import StytledButton from "../styled/styledButton";

export default function TopBar() {
  return (
    <AppBar sx={{ paddingBlock: "0.45rem", zIndex: 4 }}>
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
      <Box display={"flex"} columnGap={1.8}>
        <StytledButton icon={<Search fontSize="small" />} color={"#FFFFFFD7"} />
        <StytledButton
          icon={<VisibilityOutlined fontSize="small" />}
          color={"#FFFFFFD7"}
        />
        <StytledButton
          icon={<NotificationsOutlined fontSize="small" />}
          color={"#FFFFFFD7"}
          badge={"true"}
          badgecontent={3}
        />
      </Box>
      <Avatar
        sx={{
          height: 35,
          width: 35,
          marginInlineStart: 2.5,
        }}
      >
        <img
          src={new URL("../../public/user.jpg", import.meta.url).href}
          alt="User"
          height={"35px"}
        />
      </Avatar>
    </AppBar>
  );
}
