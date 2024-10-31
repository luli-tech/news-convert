import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_API_KEY;
const initialState = {
  articles: [],
  search: "",
  status: "idle",
  error: null,
};

export const fetchNews = createAsyncThunk(
  "articles/fetchArticles",
  async (query) => {
    const api = process.env.REACT_APP_API_KEY;
    try {
      // Use Axios to make the API call
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${api}`
      );

      let finale = await Promise.all(
        response.data.articles.map(async (article) => {
          const uniqueId = await generateHash(article.title);
          return {
            id: uniqueId,
            title: article.title,
            image: article.urlToImage,
            content: article.content,
            description: article.description,
            published: new Date(article.publishedAt).toLocaleDateString(),
            url: article.url,
            author: article.author,
          };
        })
      );

      let sortedArticles = finale.sort(
        (a, b) => new Date(b.published) - new Date(a.published)
      );

      return sortedArticles;
    } catch (error) {
      // Handle any errors that occur during the request
      throw Error(error.response?.data?.message || error.message);
    }
  }
);

function generateHash(text) {
  const msgUnit = new TextEncoder().encode(text);
  return crypto.subtle.digest("SHA-256", msgUnit).then((hashBuffer) => {
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  });
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    clearSearch(state) {
      state.search = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearch, clearSearch } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
