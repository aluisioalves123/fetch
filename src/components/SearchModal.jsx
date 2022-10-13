import React from 'react';
import { Modal, Text, TextInput, View, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import useStore from '../store'

const SearchModal = (props) => {
  const modalVisible = useStore(state => state.modalVisible);
  const changeModalVisible = useStore((state) => state.changeModalVisible);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        changeModalVisible(!modalVisible);
      }}
    >
      <View className='items-center justify-center bg-white h-full'>
        <Text>AAAkkk</Text>
        <TextInput value='123'></TextInput>
        <Pressable className="absolute rounded-xl w-12 h-12 top-2 right-2 items-center justify-center" onPress={() => changeModalVisible(!modalVisible)}>
          <FontAwesome5 name='times' size={18} color='black'/>
        </Pressable>
      </View>
      
    </Modal>
  );
}

export default SearchModal;