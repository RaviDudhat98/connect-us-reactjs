import { Tabs, Tab } from "@mui/material";

type Props = {
  value: number;
  onChange: (val: number) => void;
};

const TabsHeader = ({ value, onChange }: Props) => {
  return (
    <Tabs
      value={value}
      onChange={(_, val) => onChange(val)}
      variant="fullWidth"
    >
      <Tab label="Chats" />
      <Tab label="Users" />
    </Tabs>
  );
};

export default TabsHeader;
