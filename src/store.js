// src/store.js
import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from "@reduxjs/toolkit";

// Get the API key from environment variables
const api = process.env.REACT_APP_API_KEY;

// Async thunk for fetching news data with a query
export const fetchNews = createAsyncThunk("news/fetchNews", async (query) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${api}`
  );
  const data = await response.json();
  return data.articles || []; // Return articles or an empty array
});

// Create a slice of the store for news
const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [], // Array to hold news articles
    search: "", // Search query
    status: "idle", // Status of the request (idle, loading, succeeded, failed)
    error: null, // Error message
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload; // Update the search query in the state
    },
    clearSearch(state) {
      state.search = ""; // Clear the search query
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading"; // Set status to loading when fetching starts
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded when fetching is successful
        state.articles = action.payload; // Update articles with fetched data
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed when fetching fails
        state.error = action.error.message; // Capture the error message
      });
  },
});

// Action creators
export const { setSearch, clearSearch } = newsSlice.actions;

// Reducer
export const newsReducer = newsSlice.reducer;

// Configure the store
const store = configureStore({
  reducer: {
    news: newsReducer, // Register the news reducer
  },
});

export default store; // Export the configured store
