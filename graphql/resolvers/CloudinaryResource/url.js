import cloudinary from "cloudinary";

export default (resource, args) =>
    cloudinary.v2.url(resource._id, {
        secure: true,
        ...args,
        sign_url: Boolean(Object.keys(args).length),
    });
