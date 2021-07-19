
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import {signIn} from '../../actions/index'


const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch(signIn(parm1, parm2))
    //dispatch an action
    dispatch(signIn({
      email: email,
      password: password
    }, ()=>{
      console.log('user sign in successfully');
      history.push('/feature')
    }))
  }

  return( 
  <div className="mt-5">
  
    <div className="grid align__item">

      <div className="register">

        {/* <img height="100px" src="https://avatars.githubusercontent.com/u/67744643?s=200&v=4" alt=""/> */}
       

        <h2>Sign In</h2>

        <form onSubmit={handleSubmit} className="form">

            <div className="form__field">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="info@mailaddress.com" />
            </div>

            <div className="form__field">
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="••••••••••••" />
            </div>

            <div className="form__field">
              <input type="submit" value="Log In" />
            </div>

        </form>

        <p>Don't have an account? <Link to="/signup">Register Here</Link></p>

      </div>

    </div>
  
  </div>);
};

export default Signin;