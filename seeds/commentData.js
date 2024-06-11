const { Comments } = require("../models");

const commentData = [
  {
    content: "Not as cool as my corn",
    // date_created: "2024-2-26",
    user_id: 1,
    post_id: 1,
  },
  {
    content: "My corn is still cooler",
    // date_created: "2024-02-27",
    user_id: 1,
    post_id: 1,
  },
  {
    content: "Yeah, that's just how it is.",
    // date_created: "2024-04-2",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
