import { TabList } from "@mui/lab";
import StyledTab from "../styled/styledTab";

export default function StyledCategoryTab({ handleChange }) {
  const categories = [
    { id: "1", text: "Notificaciones" },
    { id: "2", text: "Novedades" },
  ];

  return (
    <TabList onChange={handleChange} aria-label="Category Tabs">
      {categories.map((category) => (
        <StyledTab
          key={category.id}
          label={category.text}
          value={category.id}
          p={1.6}
          width={innerWidth > 480 ? "50%" : "100%"}
          b_radius={"5px"}
          hovercolor={"#000"}
          selectedboxshadow={"0px 0.1rem 0px 0px #1f8069"}
        />
      ))}
    </TabList>
  );
}
