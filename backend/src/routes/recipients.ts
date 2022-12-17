/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { getRecipients, getDays } from "../controllers/recipients";
const router = Router();

router.get("/", async (_, res, next): Promise<void> => {
  try {
    res.json(await getRecipients());
  } catch (err: any) {
    console.error(`Error while getting recipients ids `, err.message);
    next(err);
  }
});

router.get("/days", async (req, res, next): Promise<void> => {
  try {
    console.log(req.query.care_recipient_id);
    res.json(await getDays(req.query.care_recipient_id));
  } catch (err: any) {
    console.error(`Error while getting recipients ids `, err.message);
    next(err);
  }
});

module.exports = router;
