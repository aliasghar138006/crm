import Customers from "../components/templates/Customers"
import Connect from "../utils/connectDB"
import Customer from "../models/Customer";
export default function Home({customersList}) {
  return (
    <Customers customersList={customersList} />
  )
}


export async function getServerSideProps() {
  try {
    await Connect();
    const customersList = JSON.parse(JSON.stringify( await Customer.find()));

    return {
      props : {
        customersList
      }
    } 
  } catch (error) {
    console.log(error);
    return {
      notFound : true
    }
  }
}
