const express = require("express");
const db = require("./config/db");
const app = express();
const Post = require("./models/Post");

app.use(express.json());
const PORT = 3000;

db()
  .then(() => {
    console.log("Successfully connected to mongoDB database");
    
  })
  .catch((err) => console.log(err));

// Default API Route
app.get("/api/", (req, res) => {
  res.json({ message: "server running" });
});

// Api to get all posts
app.get("/api/posts", (req, res) => {
  Post.findOne({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error in fetching the posts", data: err });
    });
});

// Api to add the blog
app.post("/api/posts/", (req, res) => {
  let newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  newPost
    .save()
    .then((data) => {
      res.status(200).json({ message: "Post added successfully", data: data });
    })
    .catch((err) => {
      res.status(500).json({ message: "post not added", error: err });
    });
});

// Api to find the specific blog
app.get("/api/posts/:postid", (req, res) => {
  let postid = req.params.postid;
  Post.find({ _id: postid })
    .then((data) => {
      res.status(200).json({ message: "Blog post found", data: data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Not found", err: err });
    });
});

// Api to update the blog
app.put("/api/posts/:postid", (req, res) => {
  let postid = req.params.postid;

  let updatedBlog = {
    title: req.body.title,
    description: req.body.description,
  };

  Post.findByIdAndUpdate(postid, updatedBlog)
    .then((data) => {
      res.status(200).json({ message: "Blog post updated succesfullt" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating blog", err: err });
    });
});

// Api to delete the blog
app.delete("/api/posts/:postid", (req, res) => {
  let postid = req.params.postid;

  Post.findByIdAndDelete(postid)
    .then((data) => {
      res.status(200).json({ message: "Blog post deleted succesfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting the blog", err: err });
    });
});


app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server listening on port:", PORT);
  }
});
