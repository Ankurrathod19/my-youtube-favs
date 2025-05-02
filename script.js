function getEmbedUrl(url) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }
  
  function addVideo() {
    const url = document.getElementById("videoUrl").value;
    const embedUrl = getEmbedUrl(url);
  
    if (embedUrl) {
      const videoList = JSON.parse(localStorage.getItem("videos")) || [];
      videoList.push(embedUrl);
      localStorage.setItem("videos", JSON.stringify(videoList));
      document.getElementById("videoUrl").value = "";
      displayVideos();
    } else {
      alert("Invalid YouTube URL");
    }
  }
  
  function displayVideos() {
    const videoList = JSON.parse(localStorage.getItem("videos")) || [];
    const container = document.getElementById("videoList");
    container.innerHTML = "";
    videoList.forEach(url => {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      container.appendChild(iframe);
    });
  }
  
  window.onload = displayVideos;
  