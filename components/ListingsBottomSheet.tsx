import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useRef, useMemo, useState} from 'react'
import {Listing} from '../interfaces/listing'
import BottomSheet from '@gorhom/bottom-sheet'
import Listings from './Listings';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    listings: Listing[];
    category: string;

}

const ListingsBottomSheet = ({listings, category}: Props) => {
    const bottomSheeRef = useRef <BottomSheet>(null)
    const snapPoints = useMemo(() => ['10%', '100%'], [])

    const [refresh, setRefresh] = useState(0)

    const showMap = () => {
        bottomSheeRef.current?.collapse();
        setRefresh(refresh + 1);
    }
  return (
    <BottomSheet 
        ref={bottomSheeRef} 
        snapPoints={snapPoints} 
        handleIndicatorStyle={{backgroundColor: Colors.grey}}
        enablePanDownToClose={false}
        style={styles.sheetContainer}
        index={1}
        >
        <View style={{flex: 1}}>
            <Listings  listings={listings} category={category} refresh={refresh}/>
            <View style={styles.absoluteBtn}>
            <TouchableOpacity onPress={showMap} style={styles.btn}>
                <Text style={styles.textBtn}>Map</Text>
                <Ionicons name='map' size={20} color={'#fff'}/>
            </TouchableOpacity>
                
                </View>
        </View>

    </BottomSheet>
  )
}

const styles = StyleSheet.create({
    absoluteBtn:{
        position: 'absolute',
        bottom: 30, 
        width: '100%',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: Colors.dark,
        padding: 16,
        height: 50,
        flexDirection: 'row',
        borderRadius: 30,
        alignItems: 'center', 
        gap: 4
    },
    textBtn: {
        fontFamily: 'mon-sb',
        color: '#fff'
    }, 
    sheetContainer:{
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowRadius: 4,
        borderRadius: 10,
        
        

    }

})

export default ListingsBottomSheet