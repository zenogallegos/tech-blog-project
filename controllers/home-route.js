const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// GET for homepage
router.get("/", auth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: { model: User },
      order: [["date_created", "DESC"]],
    });

    const homePost = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      homePost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//If not logged in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
