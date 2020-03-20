import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated:false,
    authenticate(e){
        fakeAuth.isAuthenticated = true;
        setTimeout(e,100)
    },
    signout(e){
        fakeAuth.isAuthenticated = false;
        setTimeout(e,100)
    }
}

export const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || {from:{pathname:'/'}}
    let login = () => {
        fakeAuth.authenticate (() =>{
            history.replace(from)
        })
    }
    return (
        <div>
            <p>You need login to view the {from.pathname.split('/')}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export const PrivateRoute = ({children,...rest}) => {
    return (
        <Route
            {...rest}
            render = {({location}) => fakeAuth.isAuthenticated ? (
                    children 
                ): (
                    <Redirect 
                        to = {{
                                pathname:"/login",
                                state:{from:location}
                            }}
                    />
                )
            }
        />
    )
}

export const AuthButton = () =>{
    let history = useHistory();
    return fakeAuth.isAuthenticated ? (
        <>
            <button onClick={()=>{
                fakeAuth.signout(() => history.push('/'))
            }}>Sign out</button>
        </>
    ) : (
        null
    )
}
