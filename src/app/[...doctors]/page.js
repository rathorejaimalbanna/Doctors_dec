"use client"
import React from 'react'
import styles from "../main.module.css"
import Card from '../components/card'
import { useParams } from 'next/navigation'

export default function Doctors() {
  const parama = useParams()
  console.log(parama)
  const {doctors} = parama


  return (
    <div className={styles.cardDiv}>
    <Card type={doctors[0]} special={doctors[1]} name="Devender Singh" />
    <Card type={doctors[0]} special={doctors[1]} name="Ashok Kumar" />
    <Card type={doctors[0]} special={doctors[1]} name="Alex Hmozi" />
    <Card type={doctors[0]} special={doctors[1]} name="Narayan Murti" />
  </div>
  )
}
