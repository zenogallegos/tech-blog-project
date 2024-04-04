const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
            attributes: ['title', 'date_created'],
      });
    // Preps posts for display
      const homePost = dbPostData.map((post) =>
        post.get({ plain: true })
      );
    // Displays posts
    res.render('homepage', {
    // Get homepage
      homePost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;