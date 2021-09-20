const prisma = require("../../utils/database");

const sendFriendsRequests = async (req, res) => {
  const requestBody = {
    ...req.body,
  };
  try {
    const createRequest = await prisma.friendRequest.create({
      data: requestBody,
    });
    res.json({ createRequest });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};

const getFriendsRequests = async (req, res) => {
  const requestBody = {
    ...req.body,
  };
  try {
    const getFriends = await prisma.friendRequest.findMany({
      where: {
        recieverId: requestBody.recieverId,
      },
      include: {
        sender: {
          select: {
            userimage: true,
            username: true,
          },
        },
      },
    });
    res.json({ getFriends });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};

const deleteFriendRequest = async (req, res) => {
  const requestBody = {
    ...req.body,
  };
  try {
    const deleteRequest = await prisma.friendRequest.delete({
      where: {
        id: requestBody.id,
      },
    });
    res.json({ deleteRequest });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};

module.exports = {
  sendFriendsRequests,
  getFriendsRequests,
  deleteFriendRequest,
};
