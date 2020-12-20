import mongoose from "./mongoose";

const Schema = mongoose.Schema;
const ElectionSchema = new Schema({
  name: { type: String, default: "" },
  url: { type: String, unique: true, required: true },
  type: { type: String },
  start: Date,
  end: Date,
  // Public ID of the image
  pictureId: { type: String },
  complete: { type: Boolean, default: false },
  allowedGradYears: [Number],
});

// --- Statics ---
ElectionSchema.statics.getByUrl = url => {
  return mongoose.models.Elections.findOne({ url });
};

// --- Methods ---
ElectionSchema.methods.isVotingPeriod = function () {
  const now = new Date();
  return this.start < now && this.end > now;
};

const Elections =
  mongoose.models.Elections || mongoose.model("Elections", ElectionSchema);

export default Elections;
