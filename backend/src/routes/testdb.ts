import { Router } from "express";
import { testDB } from "../controllers/testdb";
const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", async (_, res, next): Promise<void> => {
  try {
    res.json(await testDB());
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
