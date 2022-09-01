// setting up the copy on the homepage and access a specific blog (link using blog ID) 
//and links/access all the log in and sign up pages
const router = require('express').Router();
const {Blog} = require('../models');
const { findAll } = require('../models/User');

router.get("/", async (req, res) => {
const blogData = await Blog.findAll();
individualBlogData = blogData.map((blog) =>
        blog.get({ plain: true })
      );
console.log(individualBlogData)
  res.render("homepage",{ individualBlogData });
})
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    const blogData = await Blog.findByPk(id);
    individualBlogData = blogData.get({ plain: true });
          
    console.log(individualBlogData)
      res.render("blogs",{ individualBlogData });
    })
module.exports = router;