import { View  } from 'react-native'
import React, {useMemo, useState} from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listingData from '@/assets/data/airbnb-listings.json'
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json'
import ListingsMaps from '@/components/ListingsMaps';
import ListingsBottomSheet from '@/components/ListingsBottomSheet';

const Page = () => {
  
  const [category, setCategoty] = useState('Tiny homes')

   const items = useMemo(() => listingData as any, []);

   const getoItems = useMemo(() => listingsDataGeo, []);

  const onDataChanged = (category: string) => {
    setCategoty(category)
  };

  return (
    <View style={{flex: 1, marginTop: 70}}>
      <Stack.Screen
        options={{
          header: () =>  <ExploreHeader onCategoryChanged={onDataChanged}/>
        }}
      />
      {/* <Listings  listings={items} category={category}/> */}
      <ListingsMaps listings={getoItems}/>
      <ListingsBottomSheet listings={items} category={category}/>
    </View>
  )
}

export default Page
