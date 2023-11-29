import { View, Text, StyleSheet } from 'react-native'
import React, {memo} from 'react'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { defaultStyles} from '@/constants/Styles'
import {ListingGeo} from '@/interfaces/listingGeo'
import {useRouter} from 'expo-router'
import MapView from 'react-native-map-clustering'

interface Props {
    listings: any;
}



const ListingsMaps = memo(({listings} : Props) => {

    const router = useRouter();

    const londonRegion = {
        latitude: 51.509865,
        longitude: -0.118092,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

    const onMarkerSelected = (item: ListingGeo) => {
        router.push(`/listing/${item.properties.id}`)
    }

    const renderCluster = (cluster: any) => {
        const {id, geometry, onPress, properties} = cluster;
        const points = properties.point_count;

        return (
            <Marker
                key={`cruster-${id}`}
                onPress={onPress}
                coordinate={{
                    longitude: geometry.coordinates[0],
                    latitude: geometry.coordinates[1]

                }}>
                    <View style={styles.markers}>
                        <Text style={{
                            color: '#000',
                            textAlign: 'center',
                            fontFamily: 'mon-sb'
                        }}>{points}</Text>
                        </View>

            </Marker>
        )
    }

  return (
    <View style={defaultStyles.container}>
      <MapView 
        animationEnabled={false}
        style={StyleSheet.absoluteFill} 
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        initialRegion={londonRegion}
        clusterColor = '#fff'
        clusterTextColor= '#000'
        clusterFontFamily='mon-sb'
        renderCluster={renderCluster}
    >
        {listings.features.map((item: ListingGeo) => (
            <Marker 
            onPress={() => onMarkerSelected(item)}
            key={item.properties.id}
            coordinate={{
                latitude: +item.properties.latitude, 
                longitude: +item.properties.longitude
            }}> 
            <View style={styles.marker}>
                <Text style={styles.markerText}>$ {item.properties.price}</Text>
            </View>
            </Marker>
        ))}</MapView>
    </View>
  )
});

const styles = StyleSheet.create({
    container: {
    flex: 1
    },
    map: {
        width: '100%',
        height: '100%'
    },
    marker: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        elevation: 5,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 10
        }
    },
    markerText: {
        fontSize: 14,
        fontFamily: 'mon-sb'
    },
    markers:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        marginVertical: 1,
        elevation: 5,
        borderRadius: 24,
        borderWidth: 0.3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 2
        }
    }

})

export default ListingsMaps