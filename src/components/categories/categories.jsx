import { AppBar } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import CategoryTabs from "./categoryTabs";
import StytledButton from "../styled/styledButton";
import DoubleCheck from "../../assets/dobleCheck";
import Notifications from "../notifications/notifications";
import { useContext, useState } from "react";
import { Context } from "../context/context";

export default function Categories() {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => setValue(newValue);

  const notifications = useContext(Context);

  let arrData = [...notifications.map((d) => d)];

  const [data, setData] = useState(arrData);
  const [buttonHidden, setButtonHidden] = useState(false);

  const forEachArray = () => {
    arrData.forEach((n) => {
      for (let item of Object.keys(n)) {
        if (n[item] === true) {
          n[item] = false;
        }
      }
    });
    setData(arrData);
  };

  return (
    <TabContext value={value}>
      <AppBar
        position="sticky"
        sx={{
          top: "3.5rem",
          bgcolor: "white",
          borderBlockEnd: "1px solid #e4e4e7",
          minHeight: "3.55rem",
          zIndex: 3,
        }}
      >
        {value == 2 ? (
          <CategoryTabs handleChange={handleChange} />
        ) : (
          <>
            <CategoryTabs handleChange={handleChange} />
            <StytledButton
              text={"Marcar todas como leidas"}
              startIcon={<DoubleCheck />}
              hidden={buttonHidden}
              onClick={() => {
                forEachArray();
                setButtonHidden(true);
              }}
            />
          </>
        )}
      </AppBar>
      <TabPanel value="1">
        <Notifications data={data} allReaded={buttonHidden} />
      </TabPanel>
      <TabPanel
        value="2"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <h1>Panel de Novedades</h1>
      </TabPanel>
    </TabContext>
  );
}
