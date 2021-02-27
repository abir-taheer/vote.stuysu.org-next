import CloudinaryResources from "../../../models/cloudinaryResources";

export default election =>
    CloudinaryResources.idLoader.load(election.pictureId);
