const router = require('express').Router();
const { Vote } = require('../../models');

router.get('/', (req, res) => {
  Vote.findAll()
    .then(dbVoteData => res.json(dbVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  if (req.session) {
    Vote.create({
      comment_id: req.body.comment_text,
      user_id: req.session.user_id
    })
      .then(dbVoteData => res.json(dbVoteData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', (req, res) => {
  if (req.session) {
    Vote.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbVoteData => {
        if (!dbVoteData) {
          res.status(404).json({ message: 'No vote found with this id!' });
          return;
        }
        res.json(dbVoteData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
