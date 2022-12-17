import { Select, Stack, Text, Title } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react'
import api from './tools/api';

interface RecipientId {
    care_recipient_id: string;
}
interface Day {
    date: string;
}

function Home() {
    const [get, setGet] = useState<boolean>(true);
    const [recipients, setRecipients] = useState<RecipientId[]>([])
    const [selectedRecipient, setSelectedRecipient] = useState<string|null>('')
    const [days, setDays] = useState<Day[]>([])
    const [selectedDay, setSelectedDay] = useState<string|null>('')

    const dataRecipients = useMemo(()=> {
        return recipients.map((item)=> item.care_recipient_id)
    }, [recipients])

    const dataDays = useMemo(()=> {
        return days.map((day)=> day.date)
    }, [days])
    console.log(dataDays)

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

    useEffect(()=> {
        getRecipients();
    }, [get])

    useEffect(()=> {
        if (selectedRecipient !== '') {
            getDays();
        }
    }, [selectedRecipient])


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
    </Stack>
  )
}

export default Home