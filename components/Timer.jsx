import { useEffect, useState } from 'react'

const defaultState = {
  days: 0,
  minutes: 0,
  hours: 0,
  seconds: 0,
  time_up: 'TIME IS UP',
}

// deadline should passed as valid date formate
export default function ({ deadline }) {
  const [timer, setTimer] = useState({ ...defaultState })
  const [dealineTime, setDeadlineTime] = useState(null)
  const [intervalRef, setIntervalRef] = useState()

  const handleCountdown = () => {
    const now = new Date().getTime()

    const isDeadlineCrossed = new Date(dealineTime).getTime() - now

    const dd = Math.floor(t / (1000 * 60 * 60 * 24))
    const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    const ss = Math.floor((t % (1000 * 60)) / 1000)

    const days = dd < 10 ? '0' + dd : dd
    const hours = hh < 10 ? '0' + hh : hh
    const minutes = mm < 10 ? '0' + mm : mm
    const seconds = ss < 10 ? '0' + ss : ss

    if (isDeadlineCrossed < 0) {
      clearInterval(intervalRef)
      setTimer({ ...defaultState })
    } else {
      setTimer({
        days,
        hours,
        minutes,
        seconds,
      })
    }
  }

  useEffect(() => {
    setDeadlineTime(deadline)
    const x = setInterval(handleCountdown, 1000)
    setIntervalRef(x)

    return () => clearInterval(x)
  }, [])
}
