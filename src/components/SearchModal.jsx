import { useState } from 'react';
import { Modal, Text, TextInput, View, Pressable, Button, SafeAreaView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import useStore from '../store'

const SearchModal = (props) => {
  const modalVisible = useStore(state => state.modalVisible);
  const changeModalVisible = useStore((state) => state.changeModalVisible);
  const changeGithub = useStore((state) => state.changeGithub);

  const [text, setText] = useState(null)

  function searchGithub() {
    changeGithub(text)
    changeModalVisible(false);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        changeModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView className='items-center justify-center bg-white h-full'>
        <View className='w-80'>
          <Text className='mb-2'>Nome do usuário:</Text>
          <TextInput className='p-3 mb-2 border border-gray-200 rounded-lg' placeholder="Digite o nome do usuário que quer pesquisar" onChangeText={(text) => setText(text)}></TextInput>
          <Button title='Pesquisar' onPress={() => searchGithub()}/>
        </View>
        <Pressable className="absolute rounded-xl w-12 h-12 top-2 right-2 items-center justify-center" onPress={() => changeModalVisible(!modalVisible)}>
          <FontAwesome5 name='times' size={18} color='black'/>
        </Pressable>
      </SafeAreaView>
      
    </Modal>
  );
}

export default SearchModal;