import './Users.css'
import addFriend from '../../../../assets/image/add.png'
import added from '../../../../assets/image/added.png'
const User = ({id, name, image, handleAddFriend, friends, authUser}) => {
    const onClickAddFriend = ({id, name, image}) => {
        handleAddFriend({id, name, image})
    }
    const friend = friends.find(item => item.id === id)
    return (
        <div className='user'>
            <div className='blockPhoto'>
                <img src={image} alt="photoUser"/>
            </div>
            <div className='userName'>
                <p>{name}</p>
                <img onClick={() => {friend ? alert(`${friend.name} уже у вас в друзьях`) : onClickAddFriend({id, name, image})}} className='imgAddFriend' src={friend ? added : addFriend} alt=""/>
            </div>
        </div>
    )
}
export default User