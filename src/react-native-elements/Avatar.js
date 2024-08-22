
import { Avatar, Icon } from '@rneui/themed'
import React from 'react'
import { ScrollView } from 'react-native'


const AvatarBasic = () => {
    return (
        <ScrollView>
            <Avatar
                size={64}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <Avatar
                size={64}
                rounded
                title="Fc"
                containerStyle={{ backgroundColor: '#3d4db7' }}
            />
        </ScrollView>
    )
}


export default AvatarBasic