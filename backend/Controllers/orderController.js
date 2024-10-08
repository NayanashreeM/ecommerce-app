import orderModel from '../Models/orderModel.js'
import userModel from '../Models/userModel.js'

//global variable
const currency = 'inr'
const deliveryCharge = 10

//placing orders using cod method
const placeOrder = async(req,res) => {

    try {
        const{userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        return res.json({success:true, message:"Order Placed"})
        
    } 
    catch (error) {
        console.log(error);
        return res.json({success: false, message:error.message})
    }
    
}


//placing orders using cod method
const allOrders = async(req,res) => {
    try {
        const orders = await orderModel.find({});
        return res.json({success:true,orders})
    } 
    catch (error) {
        console.log(error);
        return res.json({success: false, message:error.message})
    }
}
//placing orders using cod method
const userOrders = async(req,res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        return res.json({success:true,orders})
    }
     catch (error) {
        console.log(error);
        return res.json({success: false, message:error.message})
    }
}
//placing orders using cod method
const updateStatus = async(req,res) => {
    try {
        const{orderId,status} = req.body;
        await orderModel.findByIdAndUpdate(orderId,{status});
        return res.json({success:true,message:'Status Updated'})
    } 
    catch (error) {
        console.log(error);
        return res.json({success: false, message:error.message})
    }
}

export {placeOrder, allOrders, userOrders, updateStatus,}



