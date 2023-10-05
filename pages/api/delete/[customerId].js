import Customer from "../../../models/Customer";
import Connect from "../../../utils/connectDB";


export default async function handler(req , res){
    await Connect();
    if (req.method == 'DELETE') {
        const id = req.query.customerId;
        try {
            await Customer.deleteOne({_id : id})
            res.status(200).json({status:'success' , message : 'deleted'})
        } catch (error) {
            console.log(error);
            res.status(500).json({status : 'faild'})
        }
    }
}