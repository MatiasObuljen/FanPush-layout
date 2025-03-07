import {
  ChatBubbleOutlineOutlined,
  ExploreOutlined,
  FileUploadOutlined,
} from "@mui/icons-material";
import { AppBar } from "@mui/material";
import StytledButton from "../styled/styledButton";
import PulseIcon from "../../assets/pulseIcon";
import HomeIcon from "../../assets/homeIcon";

export default function NavBar() {
  return (
    <AppBar
      color="transparent"
      sx={{
        borderBlockStart: "1px solid #e4e4e7",
        display: "flex",
        justifyContent: "space-around",
        paddingInline: "0.5rem",
        bottom: 0,
        bgcolor: "white",
        flexWrap: "nowrap",
        maxWidth: "100dvw",
        zIndex: 4,
      }}
    >
      <StytledButton icon={<HomeIcon />} color={"#777777"} />
      <StytledButton
        icon={<ExploreOutlined fontSize="small" />}
        color={"#777777"}
      />
      <StytledButton
        icon={<FileUploadOutlined fontSize="small" />}
        color={"#777777"}
      />
      <StytledButton
        icon={<ChatBubbleOutlineOutlined fontSize="small" />}
        color={"#777777"}
      />
      <StytledButton icon={<PulseIcon />} />
    </AppBar>
  );
}
