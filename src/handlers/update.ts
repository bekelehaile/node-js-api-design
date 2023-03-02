import prisma from "../db";

export const getUpdates = async (req, res) => {
  const updates = await prisma.update.findUnique({
    where:{
      id_productId:{
        id: req.user.id,
        productId: req.user.id
      }
    }
  })

  res.status(200).json({ data: updates });
};

export const getUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = await prisma.update.findUnique({
      where:{
        id,
        id_productId:{
          id: req.user.id,
          productId: req.user.id
        }
      }
    })

    res.status(200).json({ data: update });
  } catch (error) {
    res.status(400).json({ errors: error });
  }
};

export const createUpdate = async (req, res) => {
  const update = await prisma.update.create({
    data:{
        title: req.body.title,
        body: req.body.body,
        // status: req.body.status,
        asset: req.body.asset,
        version: req.body.version,
        productId: req.body.productId,
        updatedAt: new Date().toISOString(),
    }
  })

  res.status(200).json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const id = req.params.id;
  const update = await prisma.update.update({
    where:{
      id,
      id_productId:{
        id: req.user.id,
        productId: req.user.id
      }
    },
    data: {
        title: req.body.title,
        body: req.body.body,
        productId: req.body.productId
    },
  });

  res.status(200).json({ data: update });
};

export const deleteUpdate = async (req, res) => {
  const id = req.params.id;
  const update = await prisma.update.delete({
    where:{
      id,
      id_productId:{
        id: req.user.id,
        productId: req.user.id
      }
    }
  });

  res.status(200).json({ data: { message: `Update successfully deleted.` } });
};
