import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dd9j33dja",
  api_key: process.env.CLOUDINARY_API_KEY || "876996736224393",
  api_secret: process.env.CLOUDINARY_API_SECRET || "a_8alutG01LAF4RwdWx07rP6QM0",
});

export default cloudinary;
