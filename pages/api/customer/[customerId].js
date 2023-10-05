import Customer from '../../../models/Customer';
import Connect from '../../../utils/connectDB'

export default async function handler(req , res) {
    const id  = req.query.customerId;
    await Connect();
    try {
        const customer  = await Customer.findOne({_id : id});
        res.status(200).json({satus:'success' , data:customer})
    } catch (error) {
        console.log(error);
        res.status(500).json({status:'faild' , message:'Server Error!!!'})
    }
}