const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
        include: [
          {
            attributes: ['title', 'date_created'],
          },
        ],
      });
    //   Preps posts for display
      const Post = dbPostData.map((post) =>
        post.get({ plain: true })
      );
    // Displays posts
    es.render('homepage', {
    // Get homepage
      homePost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});