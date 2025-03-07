import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import StytledButton from "../styled/styledButton";
import { Check, Circle, Person } from "@mui/icons-material";
import { useState } from "react";

export default function Notification({ notification }) {
  const { type, user, time, price, unread } = notification;
  const [unreadUS, setunreadUS] = useState(unread);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => {
    setunreadUS(false);
    setAnchorEl(null);
  };

  const notificationData = () => {
    let arr = [];
    let c, e, t;
    switch (type) {
      case "like":
        c = "#fb1e93";
        e = "❤️";
        t = `A ${user} le gusta tu publicación`;
        break;
      case "follow":
        c = "#29a5fd";
        e = <Person sx={{ fontSize: "1rem" }} />;
        t = `${user} te siguió`;
        break;
      case "admin":
        c = "black";
        e = "📄";
        t =
          "Documentos aprobados! Ahora podes empezar a crear publicaciones pagas!";
        break;
      case "sell":
        c = "#27dc94";
        e = "💰";
        t = `${user} compró tu post por ⚡${Intl.NumberFormat("es-CL").format(
          price
        )}`;
        break;
      case "donation":
        c = "black";
        e = "⚡";
        t = `${user} te acaba de donar ⚡${Intl.NumberFormat("es-CL").format(
          price
        )}`;
        break;
      default:
        c = "";
        break;
    }
    arr.push(c, e, t);
    return arr;
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      columnGap={2}
      p={1.5}
      paddingBlockStart={1.1}
      minHeight={"4.1rem"}
      bgcolor={unreadUS ? "#EBEDF09D" : "white"}
      borderTop={"1px solid #ddd"}
      sx={{
        "&:hover": {
          bgcolor: "#f9fafb",
        },
      }}
    >
      <Box display={"flex"} columnGap={0.75}>
        <Avatar
          sx={{ bgcolor: notificationData().at(0) }}
          style={{ fontSize: "1rem" }}
        >
          {notificationData().at(1)}
        </Avatar>
        <Avatar sx={{ bgcolor: "#eaeaea" }}>
          {type == "admin" ? (
            " "
          ) : (
            <img
              src={new URL("../../public/santiago.jpg", import.meta.url).href}
              alt="Santiago"
              height={"40px"}
            />
          )}
        </Avatar>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        marginBlockStart={0.65}
      >
        <Typography
          variant="body2"
          fontWeight={unreadUS ? 600 : 400}
          lineHeight={1.1}
          marginBlockEnd={0.25}
        >
          {notificationData().at(2)}
        </Typography>
        <Typography variant="caption" fontWeight={500} color="gray">
          {"Hace " + time}
        </Typography>
      </Box>
      {unreadUS && (
        <>
          <StytledButton
            aria-controls={open && "basic-menu"}
            aria-haspopup="true"
            aria-expanded={open && "true"}
            onClick={handleClick}
            icon={<Circle sx={{ fontSize: "0.6rem" }} />}
            hovercolor={"#148069"}
            p={0.5}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ p: 0.5, border: "1px solid #DDDCDC", borderRadius: "5px" }}
            >
              <StytledButton
                text={"Marcar como leida"}
                startIconn={<Check sx={{ fontSize: "1rem" }} />}
                color={"black"}
                fontWeight={400}
              />
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
}
