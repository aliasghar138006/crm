import Customer from '../../../models/Customer';
import Connect from '../../../utils/connectDB'

export default async function handler(req , res) {
    const id  = req.query.customerId;
    await Connect();
    try {
        if (req.method == 'PATCH') {
            const info = req.body.data;
            const user = await Customer.findOne({_id : id});
            user.name = info.name;
            user.lastName = info.lastName;
            user.email = info.email;
            user.phone = info.phone;
            user.address = info.address;
            user.postalCode = info.postalCode;
            user.date = info.date;
            user.products = info.products;
            user.updateAt = Date.now();
            user.save();
            res.status(200).json({status:'success' , data:user})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({status:'faild'})
    }
}