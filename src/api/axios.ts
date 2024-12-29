import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ0ZGMzZmM0ZTcwZmJlNzlkOGQ3MzY0ZWJjNWQxOCIsIm5iZiI6MTcyMTk3NTA4OC4zOSwic3ViIjoiNjZhMzQxMzA3NDRmYjVmNTY5ODNjY2UyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.06VKxuZoIMAmFLsM8xN_VAYLC9LCPvI97W5rBsCA7Gk",
  },
});
