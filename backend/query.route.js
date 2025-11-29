import express from "express";
import query from "./query.controllor.js"
const router = express.Router();

router.post('/submit' , query.SendQuery);
router.post('/enroll' , query.courseEnrolment)

export default router;