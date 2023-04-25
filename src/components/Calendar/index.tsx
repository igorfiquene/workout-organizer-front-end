import { Group } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import dayjs from 'dayjs'
import { useState } from 'react'

export default function Calendar_Card() {
  const [selected, setSelected] = useState<Date[]>([])
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'))
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, 'date'))
      )
    } else if (selected.length < 1) {
      setSelected((current) => [...current, date])
    }
  }

  return (
    <Group>
      <Calendar
        getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          onClick: () => handleSelect(date)
        })}
      />
    </Group>
  )
}
