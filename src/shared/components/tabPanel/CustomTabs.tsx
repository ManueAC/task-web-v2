import React from 'react';
import {
  Tabs as MuiTabs,
  Tab as MuiTab,
  TabsProps,
  TabProps,
  withStyles,
  createStyles,
  styled,
} from '@material-ui/core';

export const Tab = withStyles(() =>
  createStyles({
    root: {
      color: '#0A2B3B',
      fontSize: '18px',
      textAlign: 'left',
      fontWeight: 'bolder',
    },
  }),
)(MuiTab);

export const Tabs = withStyles(() =>
  createStyles({
    indicator: {
      height: '3px !important',
    },
  }),
)(MuiTabs);

const TabPanel = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export interface TabComponentProps extends TabProps {
  component: React.ReactNode;
}

type AnyObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export interface TabsWithComponentProps {
  value: string;
  tabs: Array<TabComponentProps>;
  onChange: (event: React.ChangeEvent<AnyObject>, value: string) => void;
  tabsProps?: TabsProps;
}

export const TabsWithComponent: React.FC<TabsWithComponentProps> = ({
  value,
  tabs,
  onChange,
  tabsProps,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tabsComponent = tabs.map(({ component: _, ...props }) => (
    <Tab key={props.value} {...props} />
  ));

  return (
    <>
      <Tabs value={value} onChange={onChange} {...tabsProps}>
        {tabsComponent}
      </Tabs>
      {tabs.map(({ value: tabValue, component: Component }) =>
        value === tabValue ? (
          <TabPanel key={tabValue}>{Component}</TabPanel>
        ) : null,
      )}
    </>
  );
};

export default TabsWithComponent;
