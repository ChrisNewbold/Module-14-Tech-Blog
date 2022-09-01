const { Comment } = require("../models");

    const commentData = [
    {
        "body": "You little ripper was a great little blog champion!.",
        "user_id": 1
    },
    {
        "body": "Loved compo! great read mate!",
        "user_id": 2
      },
      {
        "body": "Trenty Ruled Brah!",
        "user_id": 3
      }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);
    
  module.exports = seedComments;