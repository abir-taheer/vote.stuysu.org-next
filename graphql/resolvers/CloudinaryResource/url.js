import cloudinary from "cloudinary";

export default resource => cloudinary.v2.url(resource.public_id, {secure: true, signed: true});