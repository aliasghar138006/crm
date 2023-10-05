import FormInput from "../elements/FormInput";

function ItemList({form , setForm}) {
    const {products} = form;
    const addHandler = () => {
        setForm({...form , products:[...products , {
            name:'',
            price:'',
            qty:''
        }]});

        console.log(products);
    }

    const changeHandler  = (e , index) => {
        const {name , value} = e.target;
        const newProducts = [...products];
        newProducts[index][name] = value;
        setForm({...form , products: newProducts});
    }

    const deleteHandler = (index) => {
        const newProducts = [...products];
        newProducts.splice(index , 1);
        setForm({...form , products: newProducts});
    }
    return (
        <div className="item-list">
            <p>Purchaced products</p>
            {products.map((product , index) => (
                <ProductItem key={index} product={product} index={index} changeHandler={(e) => changeHandler(e , index)} deleteHandler={() => deleteHandler(index)} />
            ))}
            <button onClick={addHandler}>Add Item</button>
        </div>
    );
}

export default ItemList;


const ProductItem = ({product , index , changeHandler , deleteHandler}) => {
   return (
    <div className="form-input__list">
        <FormInput label='Product Name' name='name' value={product.name} onChange={changeHandler} />
        <div>
            <FormInput label='Price' name='price' value={product.price} onChange={changeHandler} />
            <FormInput label='Qty' name='qty' type='number' value={product.qty} onChange={changeHandler} />
        </div>
        <button onClick={deleteHandler}>Remove Item</button>
    </div>
   )
}