const { Schema, models, model } = require("mongoose")

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    realState: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    constructionDate: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["villa", "apartment", "office", "store"],
    },

    amenities: {
      type: [String],
      default: [],
    },

    rules: {
      type: [String],
      default: [],
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    published: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
)
const Profile = models.Profile || model("Profile", profileSchema)
export default Profile
