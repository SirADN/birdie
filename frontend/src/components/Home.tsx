import { Stack, Text, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import api from './tools/api';

interface RecipientId {
    care_recipient_id: string;
}

function Home() {
    const [get, setGet] = useState<boolean>(true);
    const [recipients, setRecipients] = useState<RecipientId[]>([])

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

    useEffect(()=> {
        getRecipients();
    }, [get])


  return (
    <Stack>
        <Title>Recipients</Title>
        {recipients.map((recipient) => {
            return (<Text key={recipient.care_recipient_id}>{recipient.care_recipient_id}</Text>)
        })}
    </Stack>
  )
}

export default Home