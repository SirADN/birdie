import { Router } from "express";
import { getRecipients } from "../controllers/recipients";
const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", async (_, res, next): Promise<void> => {
  try {
    res.json(await getRecipients());
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error(`Error while getting recipients ids `, err.message);
    next(err);
  }
});

module.exports = router;
