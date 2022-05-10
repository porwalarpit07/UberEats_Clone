import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchBar = () => {
    return (
        <View style={{flexDirection:"row",marginTop:15}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 30,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius:30,
                        flexDirection:'row',
                        alignItems:'center',
                        marginRight:10
                    }
                }} 
                renderLeftButton={()=>(
                    <View>
                        <Ionicons name={"location-sharp"} size={24}/>
                    </View>
                )}/>
        </View>
    )
}

export default SearchBar