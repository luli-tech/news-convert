import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "articles/fetchArticles",
  async (query) => {
    const api = process.env.REACT_APP_API_KEY;
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=bread&apiKey=2da64fa643204522a38df55a18425e21`
    );
    const data = await res.json();
    let finale = await Promise.all(
      data?.articles?.map(async (article) => {
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
  initialState: {
    articles: [],
    search: "",
    status: "idle",
    error: null,
  },
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
