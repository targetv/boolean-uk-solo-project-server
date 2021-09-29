const prisma = require("../../utils/database");

const signIn = async (req, res) => {
  const userCredentials = {
    ...req.body,
  };

  if (!userCredentials.email || !userCredentials.password) {
    res.status(400).json({ error: "Missing email or password" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userCredentials.email,
      },
    });

    if (!user) {
      res.status(401).json({ error: "Auth Failed" });
    }

    if (userCredentials.password === user.password) {
      res.status(201).json({ user });
    } else {
      res.status(401).json({ error: "Auth Failed" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const signUp = async (req, res) => {
  const newUser = {
    ...req.body,
  };

  if (!newUser.email || !newUser.password) {
    res.status(400).json({ error: "Missing email or password." });
  }

  try {
    const createUser = await prisma.user.create({
      data: {
        ...newUser,
      },
    });
    res.status(201).json({ createUser });
  } catch (error) {
    console.error("[ERROR] /signup route: ", error);
    if (error.code === "P2002") {
      res.status(501).json({
        error: {
          ...error,
          message: "User already exists.",
        },
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = {
  signIn,
  signUp,
};
