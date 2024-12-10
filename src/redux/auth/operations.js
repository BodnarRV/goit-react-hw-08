import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logOut = createAsyncThunk("user/logOut", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const refreshUser = createAsyncThunk();
