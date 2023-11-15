const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log('find route');
    try {

      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(req.body);
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json({ error: "Failed to create comment" });
    }
  });


module.exports = router;
