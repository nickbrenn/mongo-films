const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const Resume = new Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  title: [
    {
      id: ObjectId,
      item: {
        type: ObjectId,
        ref: "User.title"
      },
      value: Boolean
    }
  ],
  links: {
    linkedin: {
      item: {
        type: ObjectId,
        ref: "User.links.linkedin"
      },
      value: Boolean
    },
    github: {
      item: {
        type: ObjectId,
        ref: "User.links.github"
      },
      value: Boolean
    },
    portfolio: {
      item: {
        type: ObjectId,
        ref: "User.links.portfolio"
      },
      value: Boolean
    }
  },
  sections: {
    experience: [
      {
        id: ObjectId,
        item: {
          type: ObjectId,
          ref: "User.sections.experience"
        },
        value: Boolean
      }
    ],
    education: [
      {
        id: ObjectId,
        item: {
          type: ObjectId,
          ref: "User.sections.experience"
        },
        value: Boolean
      }
    ],
    summary: [
      {
        id: ObjectId,
        item: {
          type: ObjectId,
          ref: "User.sections.summary"
        },
        value: Boolean
      }
    ],
    skills: [
      {
        id: ObjectId,
        item: {
          type: ObjectId,
          ref: this.user
        },
        value: Boolean
      }
    ]
  }
});

module.exports = mongoose.model("Resume", Resume);
