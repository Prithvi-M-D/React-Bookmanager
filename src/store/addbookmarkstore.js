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
  },
  reducers: {
    AddBookmark(state, action) {
      const newBookmark = action.payload;

      switch (newBookmark.category) {
        case "social":
          state.social.push({
            scid: newBookmark.id,
            sccategory: newBookmark.category,
            sctitle: newBookmark.title,
            scname: newBookmark.name,
            scurl: newBookmark.url,
          });
          break;
        case "education":
          state.education.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;
        case "music":
          state.music.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "office":
          state.office.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "everyday":
          state.everyday.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "entertainment":
          state.entertainment.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "news":
          state.news.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "sports":
          state.sports.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;

        case "style":
          state.style.push({
            id: newBookmark.id,
            category: newBookmark.category,
            title: newBookmark.title,
            name: newBookmark.name,
            url: newBookmark.url,
          });
          break;
          
        default:
          return;
      }
    },
    
  },
});

const store = configureStore({
  reducer: { add: addbookmark.reducer },
});

export const addActions = addbookmark.actions;
export default store;
