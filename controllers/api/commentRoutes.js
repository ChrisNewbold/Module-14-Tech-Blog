// user should be able to comment on a blog
const router = require('express').Router();
const { Comment } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
    Comment.findAll()
      .then((commentData) => res.json(commentData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Comment.create({
        body: req.body.body,
        Blog_id: req.body.Blog_id,
        // use the id from the session
        user_id: req.session.user_id
      })
        .then(commentData => res.json(commentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });
  
  router.delete("/:id", (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((commentData) => {
        if (!commentData) {
          res.status(404).json({ message: "No comment found with this id!" });
          return;
        }
        res.json(commentData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
module.exports = router;