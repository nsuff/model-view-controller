const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Vote, Comment, Post } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'description',
      'user_id',
      'createdAt'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(posts);

      res.render('homepage', {
        posts,
        sessionuser: req.session.user_id,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'description',
      'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      console.log(post);

      res.render('dashboard', {
        post,
        sessionuser: req.session.user_id,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/views/post', (req, res) => {
  res.render('post', {
    sessionuser: req.session.user_id,
    loggedIn: req.session.loggedIn
  });
});

router.get('/editdelete/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'comment_text',
      'user_id',
      'post_id'
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }

      const comment = dbCommentData.get({ plain: true });
      console.log(comment);

      res.render('editdelete', {
        comment,
        sessionuser: req.session.user_id,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/deletecomment/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'comment_text',
      'user_id',
      'potluck_id'
    ],
    include: [
      {
        model: Potluck,
        attributes: ['id']
      }
    ]
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const comment = dbCommentData.get({ plain: true });
      console.log(comment);

      res.render('deletecomment', {
        comment,
        sessionuser: req.session.user_id,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
