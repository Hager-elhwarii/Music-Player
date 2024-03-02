const audio = document.getElementsByClassName("audio")[0];
const current_song = document.getElementById("song-num");
const songCover = document.getElementById("cover-img");
const audioSrc = document.getElementById("audio-src");
const songName = document.getElementById("song-name");

// Array of available songs
const songs = [
  {
    id: 1,
    coverImage: "/images/stay.png",
    audioSrc: "/music/music_stay.mp3",
    name: "Stay_Justin Bebier",
  },
  {
    id: 2,
    coverImage: "/images/faded.png",
    audioSrc: "/music/music_Faded.mp3",
    name: "Faded_Alan Walker",
  },
  {
    id: 3,
    coverImage: "/images/fallingdown.jpg",
    audioSrc: "/music/music_fallingdown.mp3",
    name: "Falling Down_Wid Cards",
  },
  {
    id: 4,
    coverImage: "/images/ratherbe.jpg",
    audioSrc: "/music/music_RatherBe.mp3",
    name: "Rather Be_Clean Bandit",
  },
];

function playAudio() {
  audio.play();
}

function pauseAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function stopAudio() {
  audio.load();
  audio.pause();
}

function muteAudio() {
  audio.muted = !audio.muted;
}

function changeAudio() {
  stopAudio();
  let current_song_num = current_song.innerText;
  console.log(current_song_num);
  if (current_song_num != "4") {
    var nextSong = songs[parseInt(current_song_num)];
  } else {
    nextSong = songs[0];
  }
  changeSongSrc(nextSong);
}

function changeSongSrc(nextSong) {
  songCover.src = nextSong.coverImage;
  audioSrc.src = nextSong.audioSrc;
  current_song.innerHTML = nextSong.id;
  songName.innerHTML = nextSong.name;
  playAudio();
}
