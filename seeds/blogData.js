const { Blog } = require("../models");

const blogData = 
[
    {
      "title": "C.R.E.A.M",
      "copy": "Vestibulum id dictum turpis. Morbi eget metus sit amet erat tincidunt imperdiet non ac mi. Ut consequat faucibus augue ut porttitor.",
      "user_id": 1
    },
    {
        "title": "It was all a dream",
        "copy": "Fusce pulvinar euismod leo, eu pellentesque odio ultrices nec. Quisque vitae hendrerit turpis, eleifend condimentum velit. Proin bibendum sit amet orci vel eleifend.",
        "user_id": 2
      },
      {
        "title": "36 Chambers",
        "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, orci nec rutrum fringilla, enim lorem tincidunt risus, vitae finibus augue velit ut nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci lorem, iaculis luctus imperdiet eu, varius eget quam.",
        "user_id": 3
      }
  ]

const seedBlog = () => Blog.bulkCreate(blogData);
  
module.exports = seedBlog;