import { Select, Stack, Text, Title } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react'
import api from './utils/api';
import { TableScrollArea } from './Table';
import { Day, DayInfo, RecipientId } from './utils/types';

function Home() {
    const [get, setGet] = useState<boolean>(true);
    const [recipients, setRecipients] = useState<RecipientId[]>([])
    const [selectedRecipient, setSelectedRecipient] = useState<string|null>('')
    const [days, setDays] = useState<Day[]>([])
    const [selectedDay, setSelectedDay] = useState<string|null>('')
    const [dayInfos, setDaysInfos] = useState<DayInfo[]>([])

    const dataRecipients = useMemo(()=> {
        return recipients.map((item)=> item.care_recipient_id)
    }, [recipients])

    const dataDays = useMemo(()=> {
        return days.map((day)=> day.day)
    }, [days])

    const getRecipients = async () => {
        try {
            const response = await api.get('/recipients');
            const responseData = await response.data;
            console.log('response:', responseData);
            setRecipients(responseData)
            setGet(false)
          } catch (err) {
            console.log(err);
          }
    }

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
        getRecipients();
    }, [get])

    useEffect(()=> {
        if (selectedRecipient !== '') {
            getDays();
        }
    }, [selectedRecipient])

    useEffect(()=> {
        if (selectedDay !== '') {
            getDayInfos();
        }
    }, [selectedDay])

    

  return (
    <Stack>
        <Title>Recipients</Title>
        {recipients.map((recipient) => {
            return (<Text key={recipient.care_recipient_id}>{recipient.care_recipient_id}</Text>)
        })}
        <Select 
        value={selectedRecipient} 
        onChange={setSelectedRecipient} 
        data={dataRecipients}
        placeholder="Choose one Care Recipient to follow" />
        <Select 
        value={selectedDay} 
        onChange={setSelectedDay} 
        data={dataDays}
        placeholder="Choose one Care Recipient to follow" />
        <TableScrollArea dayInfos={dayInfos} ></TableScrollArea>
    </Stack>
  )
}

export default Home