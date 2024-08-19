export default function Friend ({friend}) {
    const {name, username, email} = friend;
    return (
        <div style={{
            border: '2px solid purple',
            margin: '15px',
            padding: '15px',
            borderRadius: '15px'
        }}>
            <h2>Name: {name}</h2>
            <h3>UserName: {username}</h3>
            <h2>Email: {email}</h2>
        </div>
    )
}


