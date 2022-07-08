<template>
  {{ age }}
</template>

<script setup>
import {ref} from 'vue'

const age = ref(null)

onMounted(() => updateTime())

function getTimeInMs() {
  const birth = new Date('January 19, 1996 01:00:00')
  const todayUTC = new Date()
  const currentTimezone = todayUTC.getTimezoneOffset() * 60 * 1000
  const timeInMs = todayUTC - birth - currentTimezone

  return timeInMs
}

const updateTime = () => {
  setInterval(() => {
    age.value = convertMsToAgeString(getTimeInMs())
  }, 1000)
}

function padTo2Digits(num) {
  return Math.floor(num).toString().padStart(2, '0')
}

function convertMsToAgeString(timeInMs) {
  let seconds = timeInMs / 1000,
    minutes = seconds / 60,
    hours = minutes / 60,
    days = hours / 24,
    months = days / 30.33,
    years = days / 365.2425

  console.log(days)

  seconds %= 60
  minutes %= 60
  hours %= 24
  days %= 30
  months %= 12

  // prettier-ignore
  return `
    ${padTo2Digits(years)}y 
    ${padTo2Digits(months)}m 
    ${padTo2Digits(days)}d 
    ${padTo2Digits(hours)}h 
    ${padTo2Digits(minutes)}m 
    ${padTo2Digits(seconds)}s
  `
}
</script>

<style scoped></style>
