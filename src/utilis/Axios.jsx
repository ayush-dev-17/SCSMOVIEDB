import axios from "axios"

const instances = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept:   "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzI5M2U4OWQyZjRlZjgzYzFkNzVhYWZmNzNmZjE2NyIsIm5iZiI6MTc0ODY4NjQxNy44NzAwMDAxLCJzdWIiOiI2ODNhZDY1MWI3YjQ1YTAyMWE2ODkzMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4RefpMdVj7Hd6uKcAiaaR583zMYy4kFFhINO3msjZhI",
  }
});

export default instances;
