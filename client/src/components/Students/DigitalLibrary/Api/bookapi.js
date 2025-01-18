export const getRecommendedBooks = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/library/recommended");
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const getRecentReadings = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/library/recent");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching recent books", error);
    return [];
  }
};
