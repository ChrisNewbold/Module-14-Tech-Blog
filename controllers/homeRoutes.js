// setting up the copy on the homepage and access a specific blog (link using blog ID)
//and links/access all the log in and sign up pages
const router = require('express').Router();
const {Blog, User, Comment} = require('../models');
const { findAll } = require('../models/User');

router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({ include: User });
  const blogs = blogData.map((blog) =>
    blog.get({ plain: true })
  );
  res.render("homepage",{ blogs, userLoggedIn: req.session.logged_in });
})

router.get("/dashboard", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return
  }
  const blogData = await Blog.findAll({ where: { user_id: req.session.user_id }});
  const blogs = blogData.map((blog) =>
    blog.get({ plain: true })
  );
  res.render("dashboard", { blogs, userLoggedIn: req.session.logged_in});
})

router.get("/blogs/:id", async (req, res) => {
  let id = req.params.id;
  const blogData = await Blog.findByPk(id, { include: [User, { model: Comment, include: User }] });
  const blog = blogData.get({ plain: true });

  blog.comments = blog.comments.map(comment => ({
    ...comment,
    can_delete: comment.user_id === req.session.user_id
  }))

  res.render("single-blog",{ blog, userLoggedIn: req.session.logged_in });
})

router.get("/blogs/:id/edit", async (req, res) => {
  let id = req.params.id;
  const blogData = await Blog.findByPk(id);
  const blog = blogData.get({ plain: true });

  res.render("editblog",{ blog, userLoggedIn: req.session.logged_in });
})



router.get("/login", async (req, res) => {
  res.render("login",{});
})

router.get("/signup", async (req, res) => {
  res.render("signup",{});
})

router.get("*", async (req, res) => {
  res.redirect('/');
})
module.exports = router;