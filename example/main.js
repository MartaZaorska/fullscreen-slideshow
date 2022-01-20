document.addEventListener("DOMContentLoaded", () => {
  const { open } = createFullscreenSlideshow(images, {
    background: "rgb(15 24 31)",
    fontColor: "#efefef",
    displayText: "tags",
    displayNumeration: true,
    controls: true
  });

  document.getElementById("open").addEventListener("click", open);
});