var playlist = {
    artistName:"Alison",
    songTitle: "Slowdrive"
  };
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, artistName, songTitle)
 }