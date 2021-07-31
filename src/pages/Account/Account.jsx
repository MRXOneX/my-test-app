import {Redirect, Route, Router, Switch} from "react-router-dom";
import MenuAccountBlock from "./MenuAccountBlock/MenuAccountBlock";
import './Account.css'
import Friends from "./MenuAccountBlock/Friends/Friends";
import Users from "./MenuAccountBlock/Users/Users";
import Profile from "./MenuAccountBlock/Profile/Profile";

const Account = ({isAuth, authUser}) => {
    if (!isAuth) {
        return <Redirect to='login'/>
    }
    return (
        <div className='account'>
            <MenuAccountBlock authUser={authUser}/>
            <div className='contentAccount'>
                <Switch>
                    <Route exact path='/account' component={Profile}/>
                    <Route path='/account/users' render={() => <Users authUser={authUser}/>}/>
                    <Route path='/account/friends' render={() => <Friends authUser={authUser}/>}/>
                </Switch>
            </div>
        </div>
    )
}
export default Account