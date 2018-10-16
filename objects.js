var playlist = {
    artistName:"Alison",
    songTitle: "Slowdrive"
  };
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {artistName:songTitle})
  // updatePlaylist(playlist, "Sometimes", "My Bloody Valentine", "Phil Ochs", "Here's to the State of Mississippi")
 }