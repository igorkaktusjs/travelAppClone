import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}> Login</Link>
      <Link href={"/(modals)/booking"}> Booking</Link>
      <Link href={"/listing/111"}> Listing details</Link>
    </View>
  )
}

export default Page
