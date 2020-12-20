import cloudinary from "cloudinary";

export default resource => cloudinary.v2.url(resource._id, {secure: true, signed: true});