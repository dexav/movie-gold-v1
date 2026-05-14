import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", //its localhost:8080, because teh axios shit doesnt really work for now and for local build doesnt even matter so its localhost:8080 for now.
  headers: { "ngrok-skip-browser-warning": "true" },
});
