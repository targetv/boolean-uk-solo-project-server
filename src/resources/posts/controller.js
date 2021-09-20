const prisma = require("../../utils/database");

const createPost = async (req, res) => {
  const postBody = {
    ...req.body,
  };

  try {
    const addPost = await prisma.post.create({
      data: postBody,
    });
    res.json({ addPost });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error });
  }
};

const getPost = async (req, res) => {
  const postBody = {
    ...req.body,
  };

  try {
    const getPost = await prisma.post.findMany({
      where: {
        channelId: postBody.channelId,
      },
    });
    res.json({ getPost });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error });
  }
};

module.exports = {
  createPost,
  getPost,
};
