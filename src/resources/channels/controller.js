const prisma = require("../../utils/database");

const createChannel = async (req, res) => {
  const createChannelBody = {
    ...req.body,
  };

  try {
    const createChannel = await prisma.channel.create({
      data: createChannelBody,
    });
    res.json({ createChannel });
  } catch (error) {
    console.log("[Error]", error);
    res.status(500).json({ error });
  }
};

const deleteChannel = async (req, res) => {
  const channelNameToDelete = {
    ...req.body,
  };
  try {
    const channelToDelete = await prisma.channel.delete({
      where: {
        channelName: channelNameToDelete.channelName,
      },
    });
    res.json({ channelToDelete });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error });
  }
};

const updateChannel = async (req, res) => {
  const channelToUpdateBody = {
    ...req.body,
  };

  try {
    const channelUpdate = await prisma.channel.update({
      where: {
        channelName: channelToUpdateBody.channelName,
      },
      data: {
        channelName: channelToUpdateBody.channelNameNew,
        topic: channelToUpdateBody.topic,
      },
    });
    res.json({ channelUpdate });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error });
  }
};

const getAllChannels = async (req, res) => {
  const getAllChannels = {
    ...req.body,
  };
  try {
    const getChannels = await prisma.channel.findMany({
      where: {
        serverId: getAllChannels.serverId,
      },
    });
    res.json({ getChannels });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error });
  }
};

module.exports = {
  createChannel,
  deleteChannel,
  updateChannel,
  getAllChannels,
};
