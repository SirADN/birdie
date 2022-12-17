import { createStyles, Stack, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import api from './utils/api';
import { RecipientId } from './utils/types';
import ChooseRecipientBar from './Bar';
import Recipient from './Recipient/Recipient';

const useStyles = createStyles({
    container: {
        margin: 'auto',
        width: '95vw', 
        height: '90vh', 
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

function Home() {
    const { classes} = useStyles();

    const [get, setGet] = useState<boolean>(true);
    const [recipients, setRecipients] = useState<RecipientId[]>([])
    const [selectedRecipient, setSelectedRecipient] = useState<string|null>(null)

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
    <Stack className={classes.container} >
        <Title order={1} color='#00264D'>Care Recipient Observer</Title>
        <ChooseRecipientBar 
        recipients={recipients}
        selectedRecipient={selectedRecipient} 
        setSelectedRecipient={setSelectedRecipient}/>
        {selectedRecipient !== null && <Recipient
        selectedRecipient={selectedRecipient}/>}
    </Stack>
  )
}

export default Home