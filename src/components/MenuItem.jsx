import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const MenuItem = (props) => {
  return (
    <View className='flex flex-row p-3 ' style={props.style}>
      <View className='h-10 w-10 mr-2 justify-center items-center border border-gray-200 rounded-xl'>
        <FontAwesome5 name={props.icon} size={18} color='black'/>
      </View>
      <View className='justify-center'>
        <Text className='font-bold text-md'>{props.title}</Text>
        <Text className='text-gray-400 text-xs'>{props.subtitle}</Text>
      </View>
      <View className='justify-center items-end grow'>
        <FontAwesome5 name='chevron-right' size={18} color='black'/>
      </View>
    </View>
  );
}

export default MenuItem;