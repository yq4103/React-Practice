import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID x2E5IMggOL55JpQvRdkjLcj4iwryfWPHvYERlA3yb9A",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
