import { createStyles, Stack, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { TableScrollArea } from '../Table'
import api from '../utils/api';
import { Day, DayInfo } from '../utils/types';
import ChooseDayBar from './Bar';

const useStyles = createStyles({
    container: {
        width: '100%', 
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

interface RecipientProps {
    selectedRecipient: string | null
}

function Recipient({selectedRecipient}: RecipientProps) {
    const { classes} = useStyles();

    const [days, setDays] = useState<Day[]>([])
    const [selectedDay, setSelectedDay] = useState<string|null>(null)
    const [dayInfos, setDaysInfos] = useState<DayInfo[]>([])

    const getDays = async () => {
        try {
            const response = await api.get(`/recipients/days?care_recipient_id=${selectedRecipient}`);
            const responseData = await response.data;
            console.log('response:', responseData);
            setDays(responseData)
          } catch (err) {
            console.log(err);
          }
    }

    const getDayInfos = async () => {
        try {
            const response = await api.get(`/recipients/dayinfos?care_recipient_id=${selectedRecipient}&day=${selectedDay}`);
            const responseData = await response.data;
            console.log('response:', responseData);
            setDaysInfos(responseData)
          } catch (err) {
            console.log(err);
          }
    }

    useEffect(()=> {
        if (selectedRecipient !== null) {
            setSelectedDay(null)
            getDays();
        }
    }, [selectedRecipient])

    useEffect(()=> {
        console.log(selectedDay)
        if (selectedDay !== null || selectedDay !== '') {
            getDayInfos();
        }
    }, [selectedDay])

  return (
    <Stack className={classes.container}>
        <Title order={2} color='#00264D'>Observations of care recipient: {selectedRecipient}</Title>
        <ChooseDayBar
        days={days}
        selectedDay={selectedDay} 
        setSelectedDay={setSelectedDay}/>
        {selectedDay !== '' && 
        <TableScrollArea dayInfos={dayInfos}/>
        }
    </Stack>
  )
}

export default Recipient