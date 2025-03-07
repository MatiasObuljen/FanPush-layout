import { AppBar } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import StyledTab from "../styled/styledTab";
import Notification from "./notification";

const notificationTabs = [
  { id: "1", text: "Todos" },
  { id: "2", text: "Me gusta" },
  { id: "3", text: "Seguidores" },
  { id: "4", text: "Admin" },
  { id: "5", text: "Compras" },
  { id: "6", text: "Donaciones" },
];

export default function Notifications({ data, allReaded, top }) {
  const notifications = data;

  const notificationsMap = (t) => {
    return notifications.map(
      (n) =>
        n.type == String(t).toLowerCase() && (
          <Notification key={n.id} notification={n} />
        )
    );
  };

  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => setValue(newValue);

  const topOffset = () => {
    let offset;
    switch (top) {
      case 143:
        offset = 200;
        break;
      case 97:
        offset = 154;
        break;
      case 57:
        offset = 113;
        break;
      default:
        113;
        break;
    }
    return offset;
  };

  return (
    <TabContext value={value}>
      <AppBar
        sx={{
          position: "sticky",
          top: `${topOffset()}px`,
          bgcolor: "white",
          borderBlockEnd: "1px solid #ddd",
          zIndex: 1,
        }}
      >
        <TabList onChange={handleChange} aria-label="Category Tabs">
          {notificationTabs.map((tab) => (
            <StyledTab
              key={tab.id}
              label={tab.text}
              value={tab.id}
              p={1.4}
              b_radius={"18px"}
              selectedbgcolor={"#148069"}
              selectedcolor={"white"}
              hoverbgcolor={"#1f977c"}
              border="#DDD"
            />
          ))}
        </TabList>
      </AppBar>
      <TabPanel value="1">
        {notifications.map((n) =>
          allReaded ? (
            <div key={n.id}>
              <Notification notification={n} />
            </div>
          ) : (
            <Notification key={n.id} notification={n} />
          )
        )}
      </TabPanel>
      <TabPanel value="2">{notificationsMap("Like")}</TabPanel>
      <TabPanel value="3">{notificationsMap("Follow")}</TabPanel>
      <TabPanel value="4">{notificationsMap("Admin")}</TabPanel>
      <TabPanel value="5">{notificationsMap("Sell")}</TabPanel>
      <TabPanel value="6">{notificationsMap("Donation")}</TabPanel>
    </TabContext>
  );
}
