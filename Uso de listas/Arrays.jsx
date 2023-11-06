import React, {useState} from 'react'

const Arrays = () => {
    const [lista] = useState(["Pedro", "Guilherme", "Gustavo", "Luan"])

    const [users] = useState([{id: 123123, name: "Pedro", age: 34},
    {id: 423, name: "Lucas", age: 12},
    {id: 16, name: "Felipe", age: 22},])


  return (
    <div>
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
            )
                
            )}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            )
                
            )}
        </ul>


    </div>
  )
}

export default Arrays