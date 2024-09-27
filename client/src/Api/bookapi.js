export const getRecommendedBooks = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/books/recommended");
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const getRecentReadings = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/books/recent");
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching recent books", error);
    return [];
  }
};
