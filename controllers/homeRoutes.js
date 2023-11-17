const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,

        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//For looking at individual post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User, {
          model: Comment,
          include: [
            User
          ]
        },

      ],
    });

    const post = postData.get({ plain: true });
    
  
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
      currentUser: req.session.user_id

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/updatepost");
    return;
  }

  res.render("/login");
});


router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Post
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("post/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        User, {
          model: Comment,
          include: [
            User
          ]
        },
        {
          model: Post
        }
      ],
    });

    const comment = commentData.get({ plain: true });
    res.render("post", {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/login", (req, res) => {
  // If user is logged in, redirect to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/createAccount", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("createAccount");
});

router.get('/updatepost/:id', withAuth, async (req, res) => {
  try {
      const blogPostData = await Post.findByPk(req.params.id, {
          include: [
              {
                  model: User,
                  attributes: ['name'],
              }
          ]
      });

      const post = postData.get({ plain: true });

      res.render('updatepost', {
          ...blogpost,
          logged_in: req.session.logged_in,
      });
  } catch (err) {
      res.status(500).json(err);
  }
})


module.exports = router;
