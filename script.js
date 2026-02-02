const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let started = false;
music.volume = 0;

musicBtn.onclick = () => {
  if (!started) {
    started = true;
    music.play();
    musicBtn.style.display = "none";

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.6) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }
};

// Gift
const giftBtn = document.getElementById("giftBtn");
const giftSection = document.getElementById("giftSection");

const iconPhoto = document.getElementById("iconPhoto");
const iconLetter = document.getElementById("iconLetter");
const photoBox = document.getElementById("photoBox");
const letterBox = document.getElementById("letterBox");

giftBtn.onclick = () => {
  giftSection.classList.remove("hidden");
  flowers();
};

iconPhoto.onclick = () => {
  photoBox.classList.remove("hidden");
  letterBox.classList.add("hidden");
  flowers();
};

iconLetter.onclick = () => {
  letterBox.classList.remove("hidden");
  photoBox.classList.add("hidden");
  flowers();
};

// Question
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");

noBtn.onclick = () => {
  yesBtn.style.position = "fixed";
  yesBtn.style.inset = "0";
  yesBtn.style.fontSize = "34px";
};

yesBtn.onclick = () => {
  finalMessage.classList.remove("hidden");
};

// Blue flowers
function flowers() {
  for (let i = 0; i < 25; i++) {
    const f = document.createElement("div");
    f.innerHTML = "💠";
    f.style.position = "fixed";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = "-10px";
    f.style.fontSize = "18px";
    f.style.animation = "fall 6s linear";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 6000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
