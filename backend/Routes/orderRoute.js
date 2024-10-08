import express from 'express'
import  {placeOrder, allOrders, userOrders, updateStatus,} from '../Controllers/orderController.js'
import adminAuth from '../Middleware/adminAuth.js'
import authUser from '../Middleware/auth.js';

const orderRouter = express.Router();

//admin feature
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment features
orderRouter.post('/place',authUser,placeOrder)

//user features
orderRouter.post('/userorders',authUser,userOrders);

export default orderRouter;