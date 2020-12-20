import mongoose from "./mongoose";
import DataLoader from "dataloader";
import resourceDetailsLoader from "../utils/cloudinary/resourceDetailsLoader";

const Schema = mongoose.Schema;
const CloudinaryResourceSchema = new Schema({
  _id: {
    type: String,
  },
  assetId: String,
  width: Number,
  height: Number,
  format: String,
  resourceType: String,
  createdAt: Date,
});

CloudinaryResourceSchema.statics.idLoader = new DataLoader(async publidIds => {
  const ids = Array.from(new Set(publidIds));

  const idMap = {};

  const storedResources = await mongoose.models.CloudinaryResources.find({
    _id: { $in: ids },
  });

  storedResources.forEach(resource => {
    idMap[resource._id] = resource;
  });

  const missingIds = ids.filter(id => !Boolean(idMap[id]));

  const dynamicallyLoadedDetails = await Promise.all(
    missingIds.map(id => resourceDetailsLoader.load(id))
  );

  const newDetails = dynamicallyLoadedDetails.filter(Boolean).map(details => ({
    _id: details.public_id,
    assetId: details.asset_id,
    width: details.width,
    height: details.height,
    format: details.format,
    resourceType: details.resource_type,
    createdAt: details.created_at,
  }));

  const newRows = await CloudinaryResources.insertMany(newDetails);

  newRows.forEach(resource => {
    idMap[resource._id] = resource;
  });

  return ids.map(id => idMap[id] || null);
});

const CloudinaryResources =
  mongoose.models.CloudinaryResources ||
  mongoose.model("CloudinaryResources", CloudinaryResourceSchema);

export default CloudinaryResources;
