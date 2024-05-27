import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dtzxzrfdw",
  api_key: "271683496565384",
  api_secret: "E--aGbyFY4RcHyVCfts0eNDu4dk",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully
    console.log("File is uploaded on cloudinary ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Removes the local saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };