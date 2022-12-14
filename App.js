import { SafeAreaView, Text, View, Image, Pressable } from 'react-native';
import { useEffect, useState} from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import useStore from './src/store'
import MenuItem from './src/components/MenuItem'
import SearchModal from './src/components/SearchModal'

import blank_user from './assets/blank_user.png'

export default function App() {
  const changeModalVisible = useStore((state) => state.changeModalVisible);
  const github = useStore((state) => state.github)
  const changeGithub = useStore((state) => state.changeGithub)
  
  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState(null)
  const [login, setLogin] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (github != null) {
      fetch("https://api.github.com/users/" + github)
        .then((response)=> response.json())
        .then((data) => {
          setAvatar(data.avatar_url)
          setName(data.name)
          setLogin(data.login)
          setShowMenu(true)
        })
    } else {
      setAvatar(null)
      setName(null)
      setLogin(null)
      setShowMenu(false)
    }
  }, [github])

  function avatar_source() {
    if (avatar != null) {
      return { uri: avatar }
    } else {
      return blank_user
    }
  }

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-gray-100'>
      <SearchModal />
      <View>
        <View>
          <Image source={avatar_source()} className="h-40 w-40 rounded-3xl" />
          <Pressable className="absolute bg-black rounded-xl w-12 h-12 bottom-0 right-0 items-center justify-center" onPress={() => changeModalVisible(true)}>
            <FontAwesome5 name='search' size={18} color='white'/>
          </Pressable>
        </View>
        <Text className='text-center text-2xl font-bold mt-3'>{name}</Text>
        <Text className='text-center text-lg text-gray-500'>{login != null ? `@${login}`: ''}</Text>
      </View>

      <View className={`flex flex-col divide-y divide-gray-200 w-80 mt-10 rounded-lg bg-white border border-gray-200 ${showMenu ? '' : 'hidden'}`}>
        <MenuItem icon='user' title='Bio' subtitle='Um pouco sobre o usu??rio'/>
        <MenuItem icon='building' title='Orgs' subtitle='Organiza????es que o usu??rio faz parte'/>
        <MenuItem icon='file' title='Reposit??rios' subtitle='Lista contendo todos os reposit??rios'/>
        <MenuItem icon='smile' title='Seguidores' subtitle='Lista de seguidores'/>
      </View>

      <View className='w-96 bg-white absolute bottom-0 rounded-3xl items-center'>
        <Pressable className='w-80 flex flex-row justify-center items-center p-4 m-2 rounded-2xl border' onPress={() => changeGithub(null)}>
          <FontAwesome5 name='redo' size={16} />
          <Text className='text-md'> Resetar</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}
