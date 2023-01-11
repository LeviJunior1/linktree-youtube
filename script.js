const socialMedia = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/levi-junior-130719130/",
  },
  {
    title: "GitHub",
    link: "https://github.com/LeviJunior1",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/levijun1or/",
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/channel/UCQ2G26Bg2To_jMGmc1q67wg",
  }
];

function createLink(media) {
  const newLink = document.createElement("a");
  newLink.href = media.link;
  newLink.target = "_blank";
  newLink.textContent = media.title;
  return newLink;
}

function setLinkDom(link) {
  const mainElement = document.querySelector("main");
  mainElement.appendChild(link);
}

socialMedia
  .map(createLink)
  .map(setLinkDom)
