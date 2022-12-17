import { createStyles, Group, Select, Text } from '@mantine/core'
import React, { useMemo } from 'react'
import { Day } from '../utils/types'

const useStyles = createStyles({
  container: {
     width: '80%',
     margin: 10,
      justifyContent: 'space-around',
      alignItems: 'center',
  }
})
interface ChooseDayBarProps {
  days: Day[],
  selectedDay: string | null,
  setSelectedDay: React.Dispatch<React.SetStateAction<string | null>>,
}

function ChooseDayBar({ 
  days, selectedDay, setSelectedDay }: ChooseDayBarProps) {
  const { classes } = useStyles()

  const dataDays = useMemo(()=> {
        return days.map((day)=> day.day)
    }, [days])

  return (
    <Group className={classes.container}>
      <Text style={{width: '50%'}}>
        You can select the day you want and be inform of the observations of you family member made by one of our caregivers.
      </Text>
    <Select 
        label="Please select the day you want to observe your family member"
        value={selectedDay} 
        onChange={setSelectedDay} 
        data={dataDays}
        placeholder="Pick one day"
        clearable
         />
    </Group>
    
  )
}

export default ChooseDayBar