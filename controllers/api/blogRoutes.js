const router = require("express").Router();
const { User, Blog } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth")


router.get("/", (req, res) => {
  Blog.findAll({
    include: [{
      model: User,
      attributes: ["username"],
    }]

  }).then((blogData) => res.json(blogData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
})

router.post("/", (req, res) => {
    Blog.create({
      title: req.body.title,
      copy: req.body.copy,
      user_id: req.session.user_id,
    })
      .then((blogData) => res.json(blogData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put("/:id", withAuth, (req, res) => {
  console.log(req.body.copy)
  Blog.update(
    {
      title: req.body.title,
      copy: req.body.copy,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((blogData) => {
      if (!blogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(blogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((blogData) => {
      if (!blogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(blogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;