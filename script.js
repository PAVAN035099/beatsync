const fileInput = document.getElementById("fileInput");
const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

let songs = [];

fileInput.addEventListener("change", function () {
  songs = Array.from(this.files);
  playlist.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.style.cursor = "pointer";
    li.style.margin = "10px";
    li.onclick = function () {
      playSong(index);
    };
    playlist.appendChild(li);
  });
});

function playSong(index) {
  const file = songs[index];
  const url = URL.createObjectURL(file);
  audio.src = url;
  audio.play();
}
