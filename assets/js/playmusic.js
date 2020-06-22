let musica = new Audio("https://convoca.pe/historiasdelapandemia/especial.mp3");
const ckbEspecialAudioSM = document.getElementById("chkEspecialAudioSM");
const ckbEspecialAudioLG = document.getElementById("chkEspecialAudioLG");
var riGrid = document.getElementById("gridImagesSection");
var mc = new Hammer(riGrid);

$(document).ready(function () {
  musica.play();
  ckbEspecialAudioSM.checked = false;
  ckbEspecialAudioLG.checked = false;
  activePanGesture();
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
    disablePanGesture();
  },
  false
);

function playEspecialAudio(idChk) {
  const ckbPlayer = document.getElementById(idChk);
  if (ckbPlayer.checked) {
    musica.play();
  } else {
    musica.pause();
    musica.currentTime = 0;
  }
}

function activePanGesture() {
  mc.get("pan").set({
    direction: Hammer.DIRECTION_VERTICAL,
  });
  mc.on("pan", function () {
    musica.play();
  });
}

function disablePanGesture() {
  mc.off("pan");
  $("#gridImagesSection").addClass("touchImportant");
}
