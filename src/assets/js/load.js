function accordionWrap() {
  let t = document.getElementsByClassName("accordion");
  for (let e = 0; e < t.length; e++) t[e].addEventListener("click", function () {
    let e = this.nextElementSibling;
    if (e.style.maxHeight) e.style.maxHeight = null, this.classList.remove("open");
    else {
      for (let a = 0; a < t.length; a++) t[a].classList.remove("open"), t[a].nextElementSibling.style.maxHeight = null;
      e.style.maxHeight = e.scrollHeight + "px", this.classList.toggle("open");
    }
  })
}

accordionWrap();  


function greetingsText () {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  const welcomeTypes = ["Dzień dobry", "Dobry wieczór"];
  let welcomeText = "";
  
  if ((hour < 18) && (hour > 4)) welcomeText = welcomeTypes[0];
  else welcomeText = welcomeTypes[1];
  
  greeting.innerHTML = welcomeText;
  }
  
greetingsText();



class Grain {
  constructor(t) {
    this.patternSize = 150, this.patternScaleX = 1, this.patternScaleY = 1, this.patternRefreshInterval = 3, this.patternAlpha = 15, this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.ctx.scale(this.patternScaleX, this.patternScaleY), this.patternCanvas = document.createElement("canvas"), this.patternCanvas.width = this.patternSize, this.patternCanvas.height = this.patternSize, this.patternCtx = this.patternCanvas.getContext("2d"), this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize), this.patternPixelDataLength = this.patternSize * this.patternSize * 4, this.resize = this.resize.bind(this), this.loop = this.loop.bind(this), this.frame = 0, window.addEventListener("resize", this.resize), this.resize(), window.requestAnimationFrame(this.loop)
  }
  resize() {
    this.canvas.width = window.innerWidth * devicePixelRatio, this.canvas.height = window.innerHeight * devicePixelRatio
  }
  update() {
    let {
      patternPixelDataLength: t,
      patternData: e,
      patternAlpha: a,
      patternCtx: i
    } = this;
    for (let r = 0; r < t; r += 4) {
      let s = 255 * Math.random();
      e.data[r] = s, e.data[r + 1] = s, e.data[r + 2] = s, e.data[r + 3] = a
    }
    i.putImageData(e, 0, 0)
  }
  draw() {
    let {
      ctx: t,
      patternCanvas: e,
      canvas: a,
      viewHeight: i
    } = this, {
      width: r,
      height: s
    } = a;
    t.clearRect(0, 0, r, s), t.fillStyle = t.createPattern(e, "repeat"), t.fillRect(0, 0, r, s)
  }
  loop() {
    let t = ++this.frame % this.patternRefreshInterval == 0;
    t && (this.update(), this.draw()), window.requestAnimationFrame(this.loop)
  }
}
const el = document.querySelector(".grain"),
  grain = new Grain(el);



  
  function portfolioSlider() {
    let t = document.querySelector("[js-carousel-wrapper]"),
      e = document.querySelectorAll("[data-carousel-arrows]"),
      a = document.querySelectorAll("[js-data-dots]"),
      i = document.querySelector("[js-slide-number-text]"),
      r = 0;
  
    function s(t, e) {
      var a, s, n, l, o;
      let c = t.querySelectorAll("[js-carousel-item]"),
        h = t.querySelector(".next"),
        d = t.querySelector(".prev"),
        p, u;
      a = c, s = h, n = d, p = r >= a.length - 1, u = r <= 0, p ? s.setAttribute("disabled", "true") : s.removeAttribute("disabled"), u ? n.setAttribute("disabled", "true") : n.removeAttribute("disabled"), (l = c).forEach(t => {
          t.removeAttribute("data-active-slide")
        }), l[r].setAttribute("data-active-slide", !0), (o = e).forEach(t => {
          t.removeAttribute("data-active-dot")
        }), o[r].setAttribute("data-active-dot", !0),
        function t(e, a) {
          let i = e.length;
          a.textContent = `${r+1} / ${i}`
        }(c, i)
    }
  
    function n(e) {
      "next" === e ? (r++, s(t, a)) : (r--, s(t, a))
    }! function e(i) {
      i.forEach(e => {
        e.addEventListener("click", () => {
          var i;
          r = (i = parseInt(e.dataset.dotsIndex)) - 1, s(t, a)
        })
      })
    }(a),
    function t(e) {
      e.forEach(t => {
        t.addEventListener("click", () => {
          "next" === t.dataset.dir ? n("next") : n("prev")
        })
      })
    }(e), s(t, a)
  }
 portfolioSlider();


function loadingScripts() {
  if (document.querySelector('.accordion')) {
    accordionWrap();  
  }
  
  if (document.querySelector('#greeting')) {
    greetingsText();
  }
  
  if (document.querySelector('.carousel-wrapper')) {
    portfolioSlider();
  }
}
