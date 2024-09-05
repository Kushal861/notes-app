const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const noteSchema = new Schema(
  {
    title: {
      type: Schema.Types.Mixed,
      required: true,
    },
    content: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
