export async function handleFetch(uri) {
  try {
    const response = await fetch(uri);
    return await response.json();
  } catch (message) {
    console.error(message);
    return message;
  }
}
