import { Router } from "express";

const router = Router();

/**
 * Product
 */
router.get("/products", (req, res) => {
  res.json({ message: req.user });
});
router.get("/product/:id", (req, res) => {});
router.post("/product/", (req, res) => {});
router.put("/product/:id", (req, res) => {});
router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */
router.get("/updates", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.post("/update/", (req, res) => {});
router.put("/update/:id", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

/**
 * Update Point
 */
router.get("/updatepoints", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.post("/updatepoint/", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
