import create from 'zustand'

const useStore = create((set) => ({
  modalVisible: false,
  changeModalVisible: (modalVisible) => set((state) => ({modalVisible: modalVisible})),
  github: null,
  changeGithub: (github) => set((state) => ({github: github})),
}))

export default useStore