import './Friends.css'
import Search from "../SearchForUsersAndFriends/Search";
import {useEffect, useState} from "react";
import axios from "axios";
import Friend from "./Friend";
const Friends = ({authUser}) => {
    const [friends, setFriends] = useState([]);
    const [valueSearch, setValueSearch] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3001/id=${authUser.id}`)
            .then(response => setFriends(response.data))
    }, [])
    const onClickRemoveFriend = (id) => {
        axios.delete(`http://localhost:3001/id=${authUser.id}/${id}`)
    }
    return (
        <div className='friends'>
            <Search setValueSearch={setValueSearch} placeholder={'search among friends...'}/>
            <div className='blockFriends'>
                {friends &&
                    friends.filter(item => item.id !== authUser.id && item.name.toLowerCase().includes(valueSearch.toLowerCase())).map(item => (
                        <Friend
                            key={item.id}
                            {...item}
                            onClickRemoveFriend={onClickRemoveFriend}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Friends