import  express  from "express";
import StudentController from "../controller/controller.js";
const router = express.Router()


router.get('/setsession',StudentController.set_session_info);
router.get('/getsession',StudentController.get_session_info);
router.get('/deletesession',StudentController.delete_session_info);   
  


export default router 