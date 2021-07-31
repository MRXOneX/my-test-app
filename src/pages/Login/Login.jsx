import {useFormik} from "formik";
import './Login.css'
import {Redirect} from "react-router-dom";
import {setAuthMeThunk, setIsAuth} from "../../redux/reducers/loginReducer";

const Login = ({isAuth, dispatch, authUser}) => {
    if(authUser) {
        dispatch(setIsAuth(true))
    }
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(setAuthMeThunk(values.email, values.password))
        },
    })
    if(isAuth) {
        return <Redirect to='/account'/>
    }
    return (
        <div className='login'>
            <div className='form'>
                <h3>LOGIN</h3>
                <form onSubmit={loginForm.handleSubmit}>
                    <input className='input inputEmail'
                           placeholder='your email'
                           id="email"
                           name="email"
                           type="email"
                           onChange={loginForm.handleChange}
                           value={loginForm.values.email}
                    /><br/>
                    <input className='input inputPassword'
                           placeholder=' your password'
                           id="password"
                           name="password"
                           type="password"
                           onChange={loginForm.handleChange}
                           value={loginForm.values.password}
                    /><br/>


                    <button className='btnLogin' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login