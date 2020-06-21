let musica = new Audio("https://convoca.pe/historiasdelapandemia/especial.mp3");
const ckbEspecialAudioSM = document.getElementById("chkEspecialAudioSM");
const ckbEspecialAudioLG = document.getElementById("chkEspecialAudioLG");

$(document).ready(function () {
  ckbEspecialAudioSM.checked = false;
  ckbEspecialAudioLG.checked = false;
});

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function (mediaStream) {
    /* El usuario dio permisos para activar el audio */
    musica.play();
    recorder = new MediaRecorder(mediaStream);
    recorder.stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });
  })
  .catch(function (err) {
    /* No tiene los permisos para usar el audio */
    console.log("Error:", err);
  });

musica.addEventListener(
  "ended",
  function () {
    ckbEspecialAudioSM.checked = false;
    ckbEspecialAudioLG.checked = false;
  },
  false
);
musica.addEventListener(
  "pause",
  function () {
    ckbEspecialAudioSM.checked = false;
    ckbEspecialAudioLG.checked = false;
  },
  false
);
musica.addEventListener(
  "play",
  function () {
    ckbEspecialAudioSM.checked = true;
    ckbEspecialAudioLG.checked = true;
  },
  false
);
// musicaTag.play();

function playEspecialAudio(idChk) {
  const ckbPlayer = document.getElementById(idChk);
  if (ckbPlayer.checked) {
    musica.play();
  } else {
    musica.pause();
    musica.currentTime = 0;
  }
}

function handleClickYes() {
  musica.play();
  $("#advice_play_music").addClass("hidden-advice");
}

function handleClickNot() {
  $("#advice_play_music").addClass("hidden-advice");
}
