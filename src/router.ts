import { UPDATE_STATUSES } from "@prisma/client";
import { Router } from "express";
import { body, oneOf, param } from "express-validator";

import { createProduct, getProduct, getProducts, updateProduct } from "./handlers/product";
import {
  storeProductValidation,
  updateProductValidation,
} from "./modules/middleware";

const router = Router();

/**
 * Products
 */
router.get("/products", (req, res) => {
  return getProducts(req, res)
});

router.get("/products/:id", (req, res) => {
  return getProduct(req, res)
});
router.post(
  "/products",
  body("name").isString().isLength({ min: 1 }),
  storeProductValidation,
  (req, res) => {
    return createProduct(req, res);
  }
);
router.put(
  "/products/:id",
  body("name").isString().isLength({ min: 1 }),
  updateProductValidation,
  (req, res) => {
    return updateProduct(req, res);
  }
);
router.delete("/products/:id", (req, res) => {});

/**
 * Updates
 */
router.get("/updates", (req, res) => {});
router.get("/updates/:id", (req, res) => {});
router.post(
  "/updates",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn([UPDATE_STATUSES]),
  body("productId").isString(),
  (req, res) => {
  }
);
router.put("/updates/:id",
body("title").optional(),
body("body").optional(),
body("status").isIn([UPDATE_STATUSES]),
body("productId").isString(),
(req, res) => {


}
);

router.delete("/updates/:id", (req, res) => {});
/**
 * Update Points
 */
router.get("/updatepoints", (req, res) => {});
router.get("/updatepoints/:id", (req, res) => {});
router.post("/updatepoints", (req, res) => {});
router.put("/updatepoints/:id", (req, res) => {});
router.delete("/updatepoints/:id", (req, res) => {});

export default router;
