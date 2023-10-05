import Card from "../modules/Card";

function Customers({customersList}) {
    console.log(customersList);
    return (
        <div>
            {customersList.map(customer => (
                <Card key={customer._id} {...customer} />
            ))}
        </div>
    );
}

export default Customers;