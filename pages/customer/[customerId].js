import DetailsPage from "../../components/templates/DetailsPage";
import Customer from '../../models/Customer';
import Connect from '../../utils/connectDB';


function Index({customerDetail}) {
    console.log(customerDetail);
    return (
        <div>
            <DetailsPage customerDetail={customerDetail} />
        </div>
    );
}

export default Index;

export async function getServerSideProps(context){
   
    try {
        await Connect();
        const {customerId} = context.query
        const customerDetail = JSON.parse(JSON.stringify(await Customer.findOne({_id : customerId})));
        return {
            props : {
                customerDetail
            }
        }
    } catch (error) {
        console.log(error);
        return {
            notFound : true
        }
    }
}