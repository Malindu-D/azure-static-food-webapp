// Reads from Azure Static Web Apps runtime environment config, fallback for local dev.
const FUNCTION_API_BASE_URL =
  window.VITE_API_BASE_URL ||
  "https://my-functionapp-fqedgmgegsfagyft.southeastasia-01.azurewebsites.net/api"; // fallback for local or dev

export async function fetchFoodImage(foodName) {
  const url = `${FUNCTION_API_BASE_URL}/GetImageFunction?itemName=${encodeURIComponent(
    foodName
  )}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`);
  }

  const data = await response.json();
  if (!data.imageUrl) {
    throw new Error("Image URL not found in API response");
  }

  return data.imageUrl;
}
