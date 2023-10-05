import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EditPage from "../../components/templates/EditPage";

function Index(props) {
    const [form , setForm] = useState(null);
    const router = useRouter();
    const {query:{customerId} , isReady} = router;
    useEffect(() => {
        if (isReady) {
            fetch(`/api/customer/${customerId}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data.data);
                setForm(data.data);
              });
          }
          console.log(form);
    } ,[isReady])
    if (form) return <EditPage form={form} setForm={setForm} />
    ;
}

export default Index;