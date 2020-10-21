const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Organ = new Schema(
  {
    organ_type: { type: String },
    organ_date: { type: Date },
    organ_representative: { type: String },
    organ_diseases: { type: String },
    organ_note: { type: String },
    organ_contact: { type: String },
    organ_blood: { type: String }
  },
  { collection: 'organs' },
  { timestamps: true, useUnifiedTopology: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("organs", Organ);