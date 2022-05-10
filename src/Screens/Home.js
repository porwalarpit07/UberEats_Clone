import React from 'react'
import { View, Text } from 'react-native'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'

const home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#eee' }}>
            <View style={{backgroundColor:'white', padding:15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
        </View>
    )
}

export default home;