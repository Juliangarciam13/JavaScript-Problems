/*Create a function called searchSong to search for a song.
in an array of n elements, if the song is in the array return
the name of the song and if it is not there, it will return that it has not been found. */
function searchSong(songs, query) {
    for (let i = 0; i < songs.length; i++) {
      if (songs[i] === query) {
        return `Song found! It's ${songs[i]}.`;
      }
    }
    return `Song ${query} not found.`;
  }
  
  const songs = ["Players", "Word Up", "Thankful", "Pacifique", "Clint Eastwood"];
  const query = "Players";
  
  console.log(searchSong(songs, query)); 