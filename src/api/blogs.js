const API_URL = "http://localhost:5000/api/blogs";

export const getBlogs = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const getBlog = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const addBlog = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to add blog:", error);
    throw error;
  }
};
export const updateBlog = async (id, blog) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  return await response.json();
};

export const deleteBlog = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const addComment = async (id, comment) => {
  const response = await fetch(`${API_URL}/${id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  return await response.json();
};
