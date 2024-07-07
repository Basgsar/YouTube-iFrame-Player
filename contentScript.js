function getYouTubeVideoId(url) {
  const regex = /^https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|)([^#\&\?]*).*/;
  const match = url.match(regex);
  return match && match[1];
}

function getTimestampFromUrl(url) {
  const regex = /t=([^&]*)/;
  const match = url.match(regex);
  return match && `&start=${match[1]}`;
}

function replacePlayerWithIFrame() {
  try {
    const videoId = getYouTubeVideoId(window.location.href);
    if (!videoId) {
      console.error("Failed to extract video ID from URL");
      return;
    }

    const timestamp = getTimestampFromUrl(window.location.href);
    const iframeUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1&widgetid=1${timestamp? `&start=${timestamp}` : ''}`;
    const iframe = document.createElement('iframe');
    iframe.src = iframeUrl;
    iframe.frameBorder = '0';
    iframe.allowFullScreen = true;
    iframe.width = '100%';
    iframe.height = '100%';

    const playerContainer = document.querySelector('.video-stream.html5-main-video');
    if (!playerContainer) {
      console.error("Failed to find player container element");
      return;
    }

    playerContainer.innerHTML = '';
    playerContainer.appendChild(iframe);
  } catch (error) {
    console.error("Error replacing player with iFrame:", error);
  }
}

document.addEventListener('DOMContentLoaded', replacePlayerWithIFrame);