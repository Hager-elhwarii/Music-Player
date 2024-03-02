var a = document.getElementsByTagName("audio")[0]
console.dir(a)
//console.log(a.canPlayType("audio/ogg"));

// array of objects of available songs
var songs = [
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
]

window.addEventListener("load", function () {
  //   console.log("loaded")
  document.getElementById("rangeAudio").max = a.duration
})

function changeAudio(rangeAudio) {
  a.currentTime = rangeAudio.valueAsNumber
}

function muteAudio() {
  a.muted = !a.muted
}

function changeVolume(volumeRange) {
  a.volume = volumeRange.valueAsNumber
}

function playAudio() {
  a.play()
}

function pauseAudio() {
  a.pause()
}

function stopAudio() {
  a.load()
  a.pause()
}

var current_song = document.getElementById("song-num")
var songCover = document.getElementById("cover-img")
var audioSrc = document.getElementById("audio-src")
var songName = document.getElementById("song-name")

function changeAudio() {
  //   debugger
  stopAudio()
  var current_song_num = current_song.innerText
  // var current_song_Name = songName.innerText
  if (current_song_num != "4") {
    var nextSong = songs[parseInt(current_song_num)]
  } else {
    nextSong = songs[0]
  }

  changeSongSrc(nextSong)
}

function changeSongSrc(nextSong) {
  songCover.src = nextSong.coverImage
  audioSrc.src = nextSong.audioSrc
  current_song.innerHTML = nextSong.id
  songName.innerHtml = nextSong.id
  playAudio()
}
