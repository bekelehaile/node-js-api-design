import prisma from "../db";

export const getProducts = async(req, res)=>{
  const products = await prisma.product.findMany({
    where:{ belongsToId: req.user.id}
  })

  res.status(200).json({data: products});
}

export const getProduct = async (req, res) => {
 try {
  const id = req.params.id
  const product = await prisma.product.findFirst({
    where:{ 
      id,
      belongsToId: req.user.id
     }
  });

  res.status(200).json({ data: product });
 } catch (error) {
  res.status(400).json({errors: error})
 }
};

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.status(200).json({ data: product });
};

export const updateProduct = async (req, res) => {
  const id = req.params.id
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.status(200).json({ data: product });
};

export const deleteProduct = async(req, res)=>{
  const id = req.params.id
  const product = await prisma.product.delete({
    where:{ id}
  })

  res.status(200).json({data: { message:`Product successfully deleted.` }})
}