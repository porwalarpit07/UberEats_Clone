import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HeaderTabs = () => {

    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
            <HeaderButtons text='Delivery' btnColor='black' txtColor='white' activeTab={activeTab} setActiveTab={setActiveTab}/>
            <HeaderButtons text='Pickup' btnColor='white' txtColor='black' activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}

const HeaderButtons = (props) => (
    <View>
        <TouchableOpacity
            style={{ backgroundColor: props.activeTab === props.text ? 'black' : 'white', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 30, marginTop: 10 }}
            onPress={() => props.setActiveTab(props.text)}>
            <Text style={{ color: props.activeTab === props.text ? 'white' : 'black',fontSize:15,fontWeight:'900' }}>{props.text}</Text>
        </TouchableOpacity>
    </View>

)

export default HeaderTabs;