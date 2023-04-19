import { createSlice } from '@reduxjs/toolkit';
import store from '../configureStore';

type AsyncSliceConfig = {
  name: string;
  initialState?: any;
  reducers?: any;
  fetchConfig: any;
};

export type RootState = ReturnType<typeof store.getState>;

type AsyncSliceAction = {};

/**
 * Cria um slice com uma função assíncrona de fetch
 *
 * @public
 */
const createAsyncSlice = (config: AsyncSliceConfig) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state: RootState) {
        state.loading = true;
      },
      fetchSuccess(state: RootState, action: any) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state: RootState, action: any) {
        state.loading = false;
        state.data = null;
        state.error = action.error;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  const asyncAction = (payload: any) => async (dispatch: any) => {
    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchConfig(payload);

      const response = await fetch(url, options);
      const data = await response.json();

      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error?.message));
    }
  };

  return {
    ...slice,
    asyncAction,
  };
};

export default createAsyncSlice;
