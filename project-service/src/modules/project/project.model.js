const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    title: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    deliveryDate: {
      type: Date,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    client: {
      type: String,
      required: true
    },
    projectType: {
      type: String,
      required: true
    },
    university: {
      type: String,
      required: true
    },
    stage: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);