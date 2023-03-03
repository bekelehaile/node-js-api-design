import UPDATE_STATUSES from "@prisma/client";
import { Router } from "express";
import { body, oneOf, param, validationResult } from "express-validator";

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";
import { handlerInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Products
 */
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post(
  "/products",
  body("name").isString(),
  handlerInputErrors,
  createProduct
);
router.put(
  "/products/:id",
  body("name").isString().isLength({ min: 1 }),
  handlerInputErrors,
  updateProduct
);
router.delete("/products/:id", (req, res) => {});

/**
 * Updates
 */
router.get("/updates", getUpdates);
router.get("/updates/:id", getUpdate);
router.post(
  "/updates",
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("status").isIn([UPDATE_STATUSES]).isString(),
  body("asset").optional().isString(),
  body("version").optional().isString(),
  body("productId").isString(),
  handlerInputErrors,
  createUpdate
);
router.put(
  "/updates/:id",
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("status").isIn([UPDATE_STATUSES]).isString(),
  body("productId").isString(),
  handlerInputErrors,
  updateUpdate
);

router.delete("/updates/:id", deleteUpdate);
/**
 * Update Points
 */
router.get("/updatepoints");
router.get("/updatepoints/:id");
router.post("/updatepoints");
router.put("/updatepoints/:id");
router.delete("/updatepoints/:id");

export default router;
