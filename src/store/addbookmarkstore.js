import { createSlice, configureStore } from "@reduxjs/toolkit";

const addbookmark = createSlice({
  name: "existing",
  initialState: {
    social: [],
    education: [],
    music: [],
    office: [],
    everyday: [],
    entertainment: [],
    news: [],
    sports: [],
    style: [],
    favourite: [],
  },
  reducers: {
    DeleteBookmark(state, action) {
      const id = action.payload.id;
      const category = action.payload.category;
      state[category] = state[category].filter((item) => item.id !== id);
    },

    AddBookmark(state, action) {
      const newBookmark = action.payload;
      console.log(action.payload);
      switch (newBookmark.category) {
        case "social":
          state.social.push({
            id: newBookmark.id,
            category: newBookmark.category,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;
        case "education":
          state.education.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;
        case "music":
          state.music.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "office":
          state.office.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "everyday":
          state.everyday.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "entertainment":
          state.entertainment.push({
            id: newBookmark.id,
            category: newBookmark.category,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          console.log(state.entertainment);
          break;

        case "news":
          state.news.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "sports":
          state.sports.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "style":
          state.style.push({
            id: newBookmark.id,
            category: newBookmark.category,

            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        default:
          return;
      }
    },

    Favourite(state, action) {
      state.favourite.push({
        url: action.payload.url,
        name: action.payload.name,
      });
      console.log(action);
      console.log(state.favourite);
    },
  },
});

const store = configureStore({
  reducer: { add: addbookmark.reducer },
});

export const addActions = addbookmark.actions;
export default store;
