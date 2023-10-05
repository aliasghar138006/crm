import FormInput from "../elements/FormInput";
import ItemList from "./ItemList";
import moment from 'moment'


function Form({form , setForm}) {

    const {name , lastName , email , phone , postalCode , address , date} = form
    

    const inputs = [
        {id:1 , label:'Name' , type:'text' , name:'name', value:name},
        {id:2 , label:'lastName' , type:'text' , name:'lastName' , value:lastName},
        {id:3 , label:'Email' , type:'text' , name:'email' , value:email},
        {id:4 , label:'Phone' , type:'text' , name:'phone' , value:phone},
        {id:5 , label:'Address' , type:'text' , name:'address' , value:address},
        {id:6 , label:'Postal Code' , type:'text' , name:'postalCode' , value:postalCode},
        {id:7 , label:'Date' , type:'date' , name:'date' , value:moment(date).utc().format("YYYY-MM-DD")},
    ]

    const changeHandler = (e) => {
        const {name , value} = e.target;
        setForm({...form , [name]:value});
    }
    
    return (
        <div>
            {inputs.map(input => (
                <FormInput key={input.id} label={input.label} type={input.type} name={input.name} onChange={(e) => changeHandler(e)} value={input.value} />
            ))}
            <ItemList form={form} setForm={setForm} />
        </div>
    );
}

export default Form;