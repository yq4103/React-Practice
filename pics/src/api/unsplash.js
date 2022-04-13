import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID x2E5IMggOL55JpQvRdkjLcj4iwryfWPHvYERlA3yb9A'
  }
});