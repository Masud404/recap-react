import { useEffect, useState } from "react"

export default function User() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);


    return (
        <div>
            <h2>Users: {user.length}</h2>
        </div>
    )
}


