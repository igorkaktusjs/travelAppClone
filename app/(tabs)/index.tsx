import { View  } from 'react-native'
import React, {useMemo, useState} from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listingData from '@/assets/data/airbnb-listings.json'
import listingDataGeo from '@/assets/data/airbnb-listings.geo.json'
import ListingsMaps from '@/components/ListingsMaps';

const Page = () => {
  
  const [category, setCategoty] = useState('Tiny homes')

  // const items = useMemo(() => listingData as any, []);

  const items = useMemo(() => listingDataGeo as any, []);

  const onDataChanged = (category: string) => {
    setCategoty(category)
  };

  return (
    <View style={{flex: 1, marginTop: 80}}>
      <Stack.Screen
        options={{
          header: () =>  <ExploreHeader onCategoryChanged={onDataChanged}/>
        }}
      />
      {/* <Listings  listings={items} category={category}/> */}
      <ListingsMaps listings={items}/>
    </View>
  )
}

export default Page
