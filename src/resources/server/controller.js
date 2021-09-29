const prisma = require("../../utils/database");

const createServer = async (req, res) => {
  const serverToCreateBody = {
    ...req.body,
  };
  try {
    const createServer = await prisma.server.create({
      data: serverToCreateBody,
    });
    res.json({ data: createServer });
  } catch (error) {
    console.log("[ERROR]", error);
    res.status(500).json({ error });
  }
};

const getServers = async (req, res) => {
  let userId = req.params.id;
  userId = parseInt(userId);

  try {
    const getServers = await prisma.server.findMany({
      where: {
        ownerId: userId,
      },
      include: {
        channel: true,
      },
    });
    res.json({ getServers });
  } catch (error) {
    console.log("[Erro]", error);
    res.status(500).json({ error });
  }
};

const deleteServer = async (req, res) => {
  const deleteServerName = {
    ...req.body,
  };
  try {
    const deleteServer = await prisma.server.delete({
      where: {
        servername: deleteServerName.servername,
      },
    });
    res.json({ deleteServer });
  } catch (error) {
    console.log("[ERROR]", error);
    res.status(500).json({ error });
  }
};

const updateServer = async (req, res) => {
  const serverToUpdate = {
    ...req.body,
  };
  try {
    const updateServer = await prisma.server.update({
      where: {
        servername: serverToUpdate.servername,
      },
      data: {
        serverimage: serverToUpdate.serverimage,
      },
    });
    res.json({ updateServer });
  } catch (error) {
    console.log("[ERROR]", error);
    res.status(500).json({ error });
  }
};

module.exports = {
  createServer,
  getServers,
  deleteServer,
  updateServer,
};
