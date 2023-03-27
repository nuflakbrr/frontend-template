import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export default axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
