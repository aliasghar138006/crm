import Link from "next/link";
import { useRouter } from "next/router";


function Card({name , _id , lastName , email  , phone , address , postalCode}) {
    const router = useRouter();
    const deleteHandler = async() => {
        const res = await fetch(`api/delete/${_id}` , {
            method :'DELETE'
        })
        const data = await res.json();
        if(data.status == 'success') return router.reload();
    }
    return (
        <div className="card">
            <div className="card__details">
                <p>
                    {name} {lastName}
                </p>
                <p>{email}</p>
            </div>

            <div className="card__buttons">
                <button onClick={deleteHandler}>Delete</button>
                <Link href={`edit/${_id}`}>Edit</Link>
                <Link href={`customer/${_id}`}>Details</Link>
            </div>
            
        </div>
    );
}

export default Card;