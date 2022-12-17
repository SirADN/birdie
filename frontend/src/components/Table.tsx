import { useEffect, useState } from 'react';
import { createStyles, Table, ScrollArea } from '@mantine/core';
import {camelCase} from 'lodash';
import { DayInfo } from './utils/types';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
  container : {
    width: '90%',
    height: '70%', 
  }
}));

interface TableScrollAreaProps {
  dayInfos: DayInfo[];
}

export function TableScrollArea({ dayInfos }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [dayInfosFiltered, setDaysInfosFiltered] = useState<any[]>([])

  const destringifyDayInfoPayload = (payload: any) => {
    const o = JSON.parse(payload);
    
    Object.keys(o).forEach(oldKey => {
        if (camelCase(oldKey) !== oldKey) {
            delete Object.assign(o, {[camelCase(oldKey)]: o[oldKey] })[oldKey]
        } ;
        });
    return o
}

const filterPayload = (payload:any) => {
  if (payload) {
    const destringifyPayload = destringifyDayInfoPayload(payload)
    let filterpayload: any[] = []
    Object.keys(destringifyPayload).forEach(key => {
        if (key.slice(-2) !== 'Id' && key !== 'id' && key !== 'timestamp') {
            filterpayload.push(`${key}: ${destringifyPayload[key].toString()} ; `)
        }
    })
    return filterpayload
  }
  return '' 
}

  useEffect(() => {
    setDaysInfosFiltered([])
    dayInfos.forEach((dayInfo) => {
        setDaysInfosFiltered(r => [...r, filterPayload(dayInfo.payload)])
    })
  }, [dayInfos])

  const rows = dayInfos.map((row, index) => (
    <tr key={row.payload}>
      <td>{row.hour}</td>
      <td>{row.eventType}</td>
      <td>{dayInfosFiltered[index]}</td>
    </tr>
  ));

  return (
    <ScrollArea
    className={classes.container} 
    onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Hour</th>
            <th>Event Type</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}