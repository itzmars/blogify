const API_URL = "http://localhost:5000/api/users";

// Function to register a new user
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
};

// Function to login a user
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Function to get protected data using fetch
export const getProtectedData = async (token) => {
  try {
    const response = await fetch(`${API_URL}/protected-route`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch protected data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching protected data:", error.message);
    throw error;
  }
};
