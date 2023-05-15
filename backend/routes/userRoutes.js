import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile', authUser)
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;