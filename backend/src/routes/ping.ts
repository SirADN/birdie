import { Router } from 'express';
const router = Router();

router.get('/', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});

module.exports = router;