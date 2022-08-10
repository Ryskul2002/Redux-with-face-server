import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUser } from "../../store/action-creator/user";
import { useActioner } from '../../hooks/useAction'


export default function UserList() {

  const { users, error, loading } = useTypedSelector((state) => state.user);
    const { fetchUser } = useActioner()

    useEffect(()=>{
        fetchUser()
    },[])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка....</h1>
    }

  return (
    <div>
            <ul>
                {users?.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
    </div>
  )
}
function useActions(): { fetchUser: any; } {
    throw new Error("Function not implemented.");
}

