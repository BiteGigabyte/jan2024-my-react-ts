import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    isLoaded: boolean;
}

const userInitState :UserSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                    const user = await userService.getById(id);
                    return thunkAPI.fulfillWithValue(user);
                }
            catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);

            }
        }
        return null;
    }
);

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

export const userSlice  = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            // state.isLoaded = true;
        })
        .addCase(loadUsers.rejected,
            (state, action) => {
                ////...
            }
        )
        .addCase(loadUserById.fulfilled,(state, action) => {
            state.user = action.payload;
        })
        .addCase(loadUserById.rejected,(state, action) => {
            //...
        })
        .addMatcher(isFulfilled(loadUserById, loadUsers), (state)=> {
            state.isLoaded = true;
        })
        .addMatcher(isFulfilled(loadUsers, loadUserById), (state) => {
            //...
        })
})


export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}