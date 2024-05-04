'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'

interface TimerProps {
  dateFrom: string
}

// Timer that shows the time passed since a certain date until now
export default function Timer({ dateFrom }: TimerProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  const getTime = () => {
    const time = Date.now() - Date.parse(dateFrom)

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  return (
    <div className="">
      {
        days === 0 && hours === 0 && minutes === 0 && seconds === 0 ?
        '' :
        `${days} days, ${hours}h${minutes}m${seconds}s`
      }
      
    </div>
  )
}
