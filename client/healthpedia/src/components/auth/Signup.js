
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {signUp} from '../../actions/index';
import {useHistory} from 'react-router-dom';


const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    
    e.preventDefault();

    //collect information from form
    //dispatch signUp action
    //dispatch(signUp({}, cb))
    dispatch(signUp({
      email: email,
      password: password
    }, ()=>{
      history.push('/healthpedia')
    }))
  }

  return (
  <div className="mt-5">
  
    <div className="grid align__item">

      <div className="register">

            <h2>Register</h2>

            <form onSubmit={handleSubmit} className="form">

              <div className="form__field">
                
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="enter email address" />
              </div>

              <div className="form__field">
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="enter password" />
              </div>

              <div className="form__field">
                <input type="submit" value="Register" />
              </div>

          </form>

          <p>Already have an account? <Link to="/signin">Log in</Link></p>

      </div>

    </div>
  
  </div>);
};

export default Signup;