import { createStyles, Group, Select, Text } from '@mantine/core'
import React, { useMemo } from 'react'
import { RecipientId } from './utils/types'

const useStyles = createStyles({
  container: {
     width: '80%',
     margin: 10,
      justifyContent: 'space-around',
      alignItems: 'center',
  }
})
interface ChooseRecipientBarProps {
  recipients: RecipientId[],
  selectedRecipient: string | null,
  setSelectedRecipient: React.Dispatch<React.SetStateAction<string | null>>
}

function ChooseRecipientBar({ 
  recipients, selectedRecipient, setSelectedRecipient }: ChooseRecipientBarProps) {
  const { classes } = useStyles()
  const dataRecipients = useMemo(()=> {
    return recipients.map((item)=> item.care_recipient_id)
}, [recipients])

  return (
    <Group className={classes.container}>
      <Text style={{width: '50%'}}>It is important to take care of our family members. 
        Thanks to this tool, you can follow the observations of your member of family, made by our care givers. </Text>
      <Select
        label="Please select the id of your family member"
        value={selectedRecipient} 
        onChange={setSelectedRecipient} 
        data={dataRecipients}
        placeholder="Choose one Care Recipient to follow"
        clearable />
    </Group>
    
  )
}

export default ChooseRecipientBar