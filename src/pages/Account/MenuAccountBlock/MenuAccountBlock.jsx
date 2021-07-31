import './MenuAccountBlock.css'

import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {logOutThunk} from "../../../redux/reducers/loginReducer";

const MenuAccountBlock = ({authUser}) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='headerAccount'>
                <div className='blockNameUser'>
                    <p>{authUser.name}</p>
                </div>
                <div className='blockPhotoUser'>
                    <img style={{cursor: 'pointer'}} onMouseDown={() => dispatch(logOutThunk())} src={authUser.image} alt=""/>
                </div>
            </div>
            <div className='navbarAccount'>
                <Link to='/account'><button className='button btnUsers'>Profile</button></Link>
                <Link to='/account/users'><button className='button btnUsers'>Users</button></Link>
                <Link to='/account/friends'><button className='button btnFriends'>Friends</button></Link>
            </div>
        </>
    )
}
export default MenuAccountBlock;