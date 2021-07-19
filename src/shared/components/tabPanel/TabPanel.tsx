import * as React from 'react';

interface ITabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
  style?: React.CSSProperties;
}

const TabPanel: React.FunctionComponent<ITabPanelProps> = ({
  children,
  value,
  index,
  style,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={style}
      {...other}>
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabPanel;
