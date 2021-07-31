import './App.css';

import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Footer from "./components/Footer/Footer";

import {getAuthMeThunk, setUsersDataThunk} from "./redux/reducers/loginReducer";

import {Redirect, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const {isAuth, usersData, authMe} = useSelector(state => state.login)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUsersDataThunk())
        dispatch(getAuthMeThunk())
    }, [])
    // В переменную auth суем данные авторизованного пользователя
    const auth = authMe.find(item => item.email && item.password)

    // Сравниваем всех пользователей из usersData и authMe / db.json тем самым находим авторизованного
    const authUser = usersData && auth && usersData.find(item => item.email === auth.email && item.password === auth.password)
    return (
        <div className="App">
            <div className='content'>
                <Route  path='/account' render={() => <Account
                    isAuth={isAuth}
                    authUser={authUser}/>}/>
                <Route exact path='/login' render={() => <Login
                    isAuth={isAuth}
                    authUser={authUser}
                    auth={auth}
                    dispatch={dispatch}/>}/>
                <Redirect from='/' to='/login'/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
