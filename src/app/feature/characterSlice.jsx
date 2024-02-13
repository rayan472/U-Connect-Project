import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacter',
    async (page = 1) => {
        const characterData = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await characterData.json()
        console.log(data, "api data here");
        return data
    }
)

export const fetchSingleCharacter = createAsyncThunk('characters/fetchSingleCharacterData',
    async (charId) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character=/${charId}`);
            const SingleCharacterData = await response.json()
            return SingleCharacterData
        } catch (error) {
            throw error
        }
    }
)

const initialState = {
    
    characters: [],
    status: '',
    error: null,
    Pagination: {
        count: 0,
        pages: 0,
        next: "",
        prev: ""
    },
    SingleCharacter: [],
    selectCharacterLoading: false
}

export const charactersSlice = createSlice({
    name: "Characters",

    initialState,
    reducers: {
        selectCharacter: (state, action) => {
            state.SingleCharacter = action.payload
        },
        selectCharacterLoading: (state, action) => {
            state.selectCharacterLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => { // 200
                state.status = "fulfilled"
                state.characters = action.payload
                state.Pagination = {
                    count: action.payload.info.count,
                    pages: action.payload.info.pages,
                    next: action.payload.info.next,
                    prev: action.payload.info.prev
                }

            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
}) 

// export const selectedData = (state) => console.log(state, "satte");
export const selectedData = (state) => state?.CharacterData?.characters?.results;
export const selectedStatus = (state) => state?.CharacterData?.status;
export const selectedPagination = (state) => state?.CharacterData?.Pagination;
export const selectSingleCharacter = (state) => state?.characters?.SingleCharacter
export default charactersSlice.reducer

