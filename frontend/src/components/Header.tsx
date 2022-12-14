import {
  createStyles,
  Container,
  Group,
  Tabs,
  Image,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: '#00264D',
    borderBottom: `1px solid ${
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background
    }`,
    marginBottom: 50,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    color: theme.white,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },

    '&[data-active]': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
      borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    },
  },
}));

interface HeaderTabsProps {
  tabs: string[];
}

export function HeaderTabsColored({ tabs }: HeaderTabsProps) {
  const { classes } = useStyles();

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
        <div style={{ width: 100, marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
        radius="xs"
        src="./birdie_blue.png"
        alt="Birdie logo"
      />
        </div>
        </Group>
      </Container>
    </div>
  );
}