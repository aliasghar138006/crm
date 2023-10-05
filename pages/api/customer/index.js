import Connect  from "../../../utils/connectDB";
import Customer from "../../../models/Customer";

export default async function handler(req , res) {
    try {
        await Connect();
        // res.status(200).json({message:'OK'});
        if (req.method == 'POST') {
            const user = req.body.data;
            const user_email = await Customer.find({email:user.email}) || null
            if(user_email.length) {
                res.status(402).json({message : 'This User Already Exist!!'});
                return;
            }
            if (!user.name || !user.lastName || !user.email) {
                res.status(402).json({message : 'Not Fill Required Fields!!!'});
                return;
            }
            const newCustomer  = await Customer.create({
                name : user.name,
                lastName : user.lastName,
                email : user.email,
                phone: user.phone,
                address : user.address,
                postalCode : user.postalCode,
                date : user.date,
                products : user.products
            });
    
            await newCustomer.save();
            res.status(201).json({message:'New Customer Created!!!' , data:newCustomer});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Connection Failed!!"});
        return;
    }

    
    
}