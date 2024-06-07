const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// GET for homepage
router.get("/", async (req, res) => {
  res.render('main', main);
});

router.get('/profile', async (req, res) => { 
  try {
    const dbPostData = await Post.findAll({
      include: [
        { 
          attributes: ["title", "date_created"] 
        },
      ],
    });
    // Preps posts for display
    const homePost = dbPostData.map((post) => post.get({ plain: true }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
