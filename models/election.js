import mongoose from "./mongoose";

const Schema = mongoose.Schema;
const ElectionSchema = new Schema({
  name: { type: String, default: "" },
  url: { type: String, unique: true, required: true },
  type: { type: String },
  start: Date,
  end: Date,
  // Public ID of the image
  pictureId: {type: String},
  complete: { type: Boolean, default: false }
});

// --- Statics ---
ElectionSchema.statics.getByStringId = id => {
  const objectId = mongoose.Types.ObjectId(id);
  return mongoose.model("Election").findById(objectId);
};

// --- Methods ---
ElectionSchema.methods.isVotingPeriod = function () {
  const now = new Date();
  return this.start < now && this.end > now;
};

const Election = mongoose.model("Election", ElectionSchema);

export default Election;
