// Portfolio Lena Obiang
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Moniteurs du hero : boucles muettes + timecode façon caméra ---
  const loops = document.querySelectorAll(".monitor");
  const pad = (n) => String(Math.floor(n)).padStart(2, "0");
  const toTimecode = (t, fps = 24) => {
    const h = t / 3600, m = (t % 3600) / 60, s = t % 60, f = (t % 1) * fps;
    return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  };

  loops.forEach((monitor) => {
    const video = monitor.querySelector("video");
    const tc = monitor.querySelector(".tc");
    if (!video) return;

    if (reduceMotion) {
      monitor.querySelector(".hud-rec")?.remove();
      return; // on garde l'image fixe (poster)
    }

    // Ne lire que si l'écran est visible
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.2 });
    io.observe(video);

    // Décalage pour un timecode qui "tourne" en continu
    let offset = Math.random() * 600 + 60;
    let last = 0;
    const tick = () => {
      if (!video.paused) {
        if (video.currentTime < last) offset += video.duration || 7;
        last = video.currentTime;
        tc.textContent = toTimecode(offset + video.currentTime);
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  // --- Lecteurs des réalisations ---
  const players = document.querySelectorAll(".player");
  const all = [...players].map((p) => p.querySelector("video"));

  players.forEach((player) => {
    const video = player.querySelector("video");
    const btn = player.querySelector(".play");

    btn.addEventListener("click", () => {
      all.forEach((v) => { if (v !== video) v.pause(); });
      player.classList.add("is-playing");
      video.controls = true;
      video.play().catch(() => {});
      video.focus({ preventScroll: true });
    });

    video.addEventListener("ended", () => {
      player.classList.remove("is-playing");
      video.controls = false;
      video.currentTime = 0;
      video.load(); // ré-affiche l'affiche
    });

    video.addEventListener("play", () => {
      all.forEach((v) => { if (v !== video) v.pause(); });
    });
  });

  // Année du pied de page
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
