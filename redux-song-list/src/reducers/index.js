import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Fly me to the moon", duration: "4:05" },
    { title: "A little pain", duration: "3:05" },
    { title: "Wish", duration: "3:50" },
    { title: "Aria", duration: "5:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
