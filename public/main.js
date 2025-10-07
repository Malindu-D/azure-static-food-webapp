import { fetchFoodImage } from "./api.js";

const buttons = document.querySelectorAll("button[data-food]");
const imageBox = document.getElementById("image-box");

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const foodName = button.getAttribute("data-food");
    imageBox.innerHTML = "Loading...";

    try {
      const imageUrl = await fetchFoodImage(foodName);
      imageBox.innerHTML = `<img src="${imageUrl}" alt="${foodName}" />`;
    } catch (error) {
      imageBox.innerHTML = `<span style="color: red;">Error loading image</span>`;
      console.error(error);
    }
  });
});
