// tokenValidation.js
async function validateToken(token) {
  try {
    const response = await fetch(
      "https://backenddatc11.azurewebsites.net/api/token/validate",
      {
        method: "POST",
        headers: {
          // prettier-ignore
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Token validation failed");
    }

    return true;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}

export default validateToken;
