import { useRouter } from "next/router";
import Form from "../modules/Form";
function EditPage({form , setForm}) {
    const router = useRouter()
    const cancelHandler = () => {
        router.push('/')
    }

    const saveHandler = async() => {
        setForm({...form})
        const res = await fetch(`/api/edit/${router.query.customerId}` , {
            method : 'PATCH',
            body : JSON.stringify({data : form}),
            headers : {
                'Content-Type' : 'application/json'
            }
            
        });
        const data = await res.json();
        if(data.status == 'success') router.push('/')
        
    }
    return (
        <div>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>
                    Cancel
                </button>
                <button className='second' onClick={saveHandler}>
                    Edit
                </button>
            </div>
        </div>
       
    );
}

export default EditPage;