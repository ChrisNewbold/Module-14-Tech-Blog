const { Comment } = require("../models");

    const commentData = [
    {
        "body": "Suspendisse convallis gravida dui at mollis. Ut feugiat augue non libero molestie, non fringilla ante lobortis.",
        "user_id": 1,
        "blog_id": 1
    },
    {
        "body": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "user_id": 2,
        "blog_id": 1

      },
      {
        "body": "Nullam imperdiet enim vitae vehicula sollicitudin.",
        "user_id": 3,
        "blog_id": 1
      }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);
    
  module.exports = seedComments;