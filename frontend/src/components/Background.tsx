import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  blue: {
    width: '100%',
    backgroundColor: '#0A2D82',
  },
  high: {
    height: '5vh',
  },
}));

export default function Background() {
  const { classes } = useStyles();
  return (
    <div className={classes.background}>
      <div className={`${classes.blue} ${classes.high}`} />
    </div>
  );
}
