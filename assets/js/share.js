function shareIndexOnFacebook() {
  shareFB("index.html", "Historias de la pandemia");
}

function shareIndexOnTwitter() {
  shareTW("index.html", "Historias de la pandemia");
}

function shareIndexOnWhatsapp() {
  shareWS("index.html", "Historias de la pandemia");
}

// Functions for "imprescindibles"
function shareImprescindiblesOnFacebook() {
  shareFB("pages/imprescindibles/imprescindibles.html", "Los imprescindibles");
}

function shareImprescindiblesOnTwitter() {
  shareTW("pages/imprescindibles/imprescindibles.html", "Los imprescindibles");
}

function shareImprescindiblesOnWhatsapp() {
  shareWS("pages/imprescindibles/imprescindibles.html", "Los imprescindibles");
}

// Functions for "inolvidables"
function shareInolvidablesOnFacebook() {
  shareFB("pages/inolvidables/inolvidables.html", "Los inolvidables");
}

function shareInolvidablesOnTwitter() {
  shareTW("pages/inolvidables/inolvidables.html", "Los inolvidables");
}

function shareInolvidablesOnWhatsapp() {
  shareWS("pages/inolvidables/inolvidables.html", "Los inolvidables");
}

// Functions for "resilientes"
function shareResilientesOnFacebook() {
  shareFB("pages/resilientes/resilientes.html", "Los resilientes");
}

function shareResilientesOnTwitter() {
  shareTW("pages/resilientes/resilientes.html", "Los resilientes");
}

function shareResilientesOnWhatsapp() {
  shareWS("pages/resilientes/resilientes.html", "Los resilientes");
}

function shareCurrentPageOnTW(message = 'Historias de la pandemia') {
  var URI = window.location.href;
  var dir = URI;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  window.open(
    "http://twitter.com/?status=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function shareCurrentPageOnFB(message = 'Historias de la pandemia') {
  var URI = window.location.href;
  var dir = URI;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  var dir2 = encodeURIComponent(dir);
  window.open(
    "http://www.facebook.com/share.php?u=" + dir2 + "&t=" + tit2 + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function shareCurrentPageOnWS(message = 'Historias de la pandemia') {
  var URI = window.location.href;
  var dir = URI;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  window.open(
    "https://wa.me/?text=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

const adicionalPath = "/convoca-landing";
// Main share functions
function shareTW(page = "index.html", message) {
  var URI = window.location.origin;
  var dir = URI + adicionalPath + "/" + page;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  window.open(
    "http://twitter.com/?status=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function shareFB(page = "index.html", message) {
  var URI = window.location.origin;
  var dir = URI + adicionalPath + "/" + page;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  var dir2 = encodeURIComponent(dir);
  window.open(
    "http://www.facebook.com/share.php?u=" + dir2 + "&t=" + tit2 + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function shareWS(page = "index.html", message) {
  var URI = window.location.origin;
  var dir = URI + adicionalPath + "/" + page;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  window.open(
    "https://wa.me/?text=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}
