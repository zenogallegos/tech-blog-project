const router = require("express").Router();
const { User, Post } = require("../../models");

//Get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    // {include: {model: User, attributes: 'name'}}
    res.json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//Get user by id
router.get("/userId", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.params.userId,
      },
      include: { model: User, attributes: "name" },
    });
    res.json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//Get post by id
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    res.json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//Create post
router.post("/", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    if (user && req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
        user_id: user.id,
      };
      const postData = await Post.create(newPost);
      res.json(postData);
    } else {
      res.status(500).json("invalid post");
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//Delete post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({ where: { id: req.params.id } });
    res.json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//Update post
router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;
