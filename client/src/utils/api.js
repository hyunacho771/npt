//api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const insertVideo = (payload) => api.post(`/videos`, payload);
export const getAllVideos = () => api.get(`/videos`);
export const getVideo = (payload) => api.get(`/videos`, payload);
export const getVideos = (payload) => api.get(`/videos`, payload);
export const updateVideoById = (id, payload) =>
  api.put(`/videos/${id}`, payload);
export const deleteVideoById = (id) => api.delete(`/videos/${id}`);
export const getVideoById = (id) => api.get(`/videos/${id}`);

export const signup = (payload) => api.post(`/signup`, payload);
export const login = (payload) => api.post(`/login`, payload);
export const logout = () => api.post(`/logout`);

const apis = {
  insertVideo,
  getAllVideos,
  getVideos,
  updateVideoById,
  deleteVideoById,
  getVideoById,
  signup,
  login,
  logout,
};

export default apis;
