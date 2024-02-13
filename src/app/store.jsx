import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './feature/characterSlice'

export const store = configureStore({
  reducer: {
    CharacterData: charactersReducer
  },
})