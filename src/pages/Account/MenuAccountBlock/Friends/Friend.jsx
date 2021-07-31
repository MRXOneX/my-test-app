const Friend = ({image, name, onClickRemoveFriend, id}) => {
    return (
        <div className='friend'>
            <div className='photoFriend'>
                <img src={image} alt=""/>
            </div>
            <div className='nameFriend'>
                <p>{name}</p>
            </div>
            <div className='removeFriend'>
                <button onClick={() => onClickRemoveFriend(id)}>remove friend</button>
            </div>
        </div>
    )
}
export default Friend