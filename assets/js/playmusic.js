let musica = new Audio("https://convoca.pe/historiasdelapandemia/especial.mp3");
const ckbEspecialAudioSM = document.getElementById("chkEspecialAudioSM");
const ckbEspecialAudioLG = document.getElementById("chkEspecialAudioLG");

$(document).ready(function () {
  ckbEspecialAudioSM.checked = false;
  ckbEspecialAudioLG.checked = false;
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
  $('#advice_play_music').addClass('hidden-advice');
}

function handleClickNot() {
  $('#advice_play_music').addClass('hidden-advice');
}
