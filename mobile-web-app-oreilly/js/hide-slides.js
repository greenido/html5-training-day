document.addEventListener('DOMContentLoaded', hideSlidesDomLoaded, false);

function hideSlidesDomLoaded() {
  if (!slidesConfig.settings.includeWebRTC) {
    var webrtcSlides = document.querySelectorAll('section.slides > article.webrtc-slide');
    for (var i = 0, slide; slide = webrtcSlides[i]; ++i) {
      slide.classList.add('hidden');
    }
  }
}

