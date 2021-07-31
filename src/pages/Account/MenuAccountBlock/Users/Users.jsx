import Search from "../SearchForUsersAndFriends/Search";
import './Users.css'
import User from "./User";
import {useEffect, useState} from "react";
import axios from "axios";

const Users = ({authUser}) => {
    const [users, setUsers] = useState([])
    const [valueSearch, setValueSearch] = useState('')
    const [friends, setFriends] = useState([])
    useEffect(() => {
        try {
            axios.get('http://localhost:3001/users')
                .then(response => {
                    setUsers(response.data)
                })
            axios.get(`http://localhost:3001/id=${authUser.id}`)
                .then(response => {
                    setFriends(response.data)
                })
        } catch (error) {
            console.log('Запрос на пользователей не удался: ', error)
        }
    }, [])
    const handleAddFriend = (obj) => {
        try {
            console.log(obj)
            axios.post(`http://localhost:3001/id=${authUser.id}`, obj)
            ;
        } catch (error) {
            console.log('Не удалось добавить друга: ', error)
        }
    }
    return (
        <div className='users'>
            <Search placeholder={'search among users...'} setValueSearch={setValueSearch}/>
            <div className='blockUsers'>
                {users &&
                users.filter(item => item.id !== authUser.id && item.name.toLowerCase().includes(valueSearch.toLowerCase())).map(item => (
                    <User key={item.id}
                          friends={friends}
                          handleAddFriend={handleAddFriend}
                          authUser={authUser}
                          {...item}
                    />
                ))
                }
            </div>
        </div>
    )
}
export default Users