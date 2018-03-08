import React, { Component } from 'react';
import {Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
// import Login from './login';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { FirebaseAuthService } from '../../store/middleware/authMiddleware';
// injectTapEventPlugin();


const mapStateToProps = (state) => {
  console.log('state from sign up' ,state)
  return{
      isRegistered: state.AuthReducer.isRegistered
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (userAuth) => {
            dispatch(FirebaseAuthService.registerUserOnFirebase(userAuth))
        }
    }
}

class SignUp extends Component{
    constructor() {
    super();
    this.signup = this.signup.bind(this)
};

componentWillReceiveProps(nextProp){  
  console.log('next prop', nextProp)
  if(nextProp.isRegistered){
    alert("Sign Up")
    browserHistory.push('/login');
  }
}

signup(e){
    e.preventDefault();
    let user={
     email: this.refs.email.getValue(),
     password : this.refs.password.getValue(),
     firstName : this.refs.firstname.getValue(),
     lastName : this.refs.lastname.getValue(),
    }
    this.props.signUpUser(user);
}
    render(){


        const styles = {
        underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
 
 
};

       return(
        <div >
          <div className="App2">
          <Paper>
          <div>
            <div>
                <h1>Sign Up</h1>
    <TextField
      floatingLabelText="First Name"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      ref="firstname"
    /><br />
    <TextField
      floatingLabelText="Last Name"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      ref="lastname"
    /><br />
    <TextField
      floatingLabelText="Email"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      ref="email"
      
    /><br />
    <TextField
      floatingLabelText="Password"
      type="password"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      ref="password"
    /><br />
    
  </div>
  <div className="button">
    <RaisedButton label="Sign Up" onClick={this.signup} primary={true}  color={styles.RaisedButton} /> <br/> <br/> <br/> 
    <Link to="/login"><RaisedButton label="Login" primary={true}/> </Link>
  
  </div>
  </div>
  </Paper>
  </div>
    </div>
       )
}
}



export default connect(mapStateToProps,mapDispatchToProps)(SignUp);