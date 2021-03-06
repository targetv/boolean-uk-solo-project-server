const prisma = require("../../utils/database");

const User = async (req, res) => {
  let userId = req.params.id;

  userId = parseInt(userId);

  try {
    const getUser = await prisma.user.findMany({
      where: {
        id: userId,
      },
      include: {
        ownedServers: true,
        memberServers: {
          include: {
            server: {
              select: {
                servername: true,
                serverimage: true,
                id: true,
              },
            },
          },
        },
      },
    });
    res.json({ getUser });
  } catch (error) {
    console.log("[Error]", error);
    res.status(500).json({ error });
  }
};

const createUser = async (req, res) => {
  const userToCreate = {
    ...req.body,
  };

  try {
    const user = await prisma.user.create({
      data: userToCreate,
    });
    res.json({ data: user });
  } catch (error) {
    console.log("[ERROR]: ", error);

    res.status(500).json({ error });
  }
};

const deleteUser = async (req, res) => {
  const userToDeleteEmail = {
    ...req.body,
  };

  try {
    const userToDelete = await prisma.users.delete({
      where: {
        email: userToDeleteEmail.email,
      },
      select: {
        email: true,
        username: true,
        password: true,
        userimage: true,
        id: true,
      },
    });
    res.json({ data: userToDelete });
  } catch (error) {
    console.log("[ERROR]: ", error);

    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  const userToUpdate = {
    ...req.body,
  };
  try {
    const updateUser = await prisma.users.update({
      where: {
        email: userToUpdate.email,
      },
      data: {
        userimage: userToUpdate.userimage,
      },
    });
    res.json({ data: updateUser });
  } catch (error) {
    console.log("[ERROR]", error);
    res.status(500).json({ error });
  }
};

module.exports = {
  User,
  createUser,
  deleteUser,
  updateUser,
};
