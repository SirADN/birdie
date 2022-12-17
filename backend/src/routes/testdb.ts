import { Router } from 'express';
import { testDB } from '../controllers/testdb'
const router = Router();
  

router.get('/', async (_, res, next) => {
  try {
    res.json(await testDB());
  } catch (err: any) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
