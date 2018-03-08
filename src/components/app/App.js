import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import {FirebaseAuthService} from '../../store/middleware/authMiddleware';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// import './App.css';
 const mapStateToProps = (state) =>{
   return{
     isLoggedin : state.AuthReducer.isLoggedin
   }
 }
const mapDispatchToprops =(dispatch) =>{
  return{
    logout: ()=>{
      dispatch(FirebaseAuthService.logoutFromFirebase());
    } 
  }
}
class App extends Component {
  constructor(props) {

    super(props);
    this.state = {open: false};
   }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  logoutUser=()=>{
    this.props.logout();
     browserHistory.push('/login');
  }
  render() {
    const styles = {
  title: {
    cursor: 'pointer',
  },
};
    return (
      <div className="App">
               <div>
        <AppBar  
    
         title={<span style={styles.title}>Blood Bank System</span>}
          label="Open Drawer"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={this.props.isLoggedin? <FlatButton label="Log Out"  onTouchTap={this.logoutUser}/>:<FlatButton label="Sign Up" onTouchTap={()=>browserHistory.push('/signup')}/>}
          /*onRightIconButtonTouchTap={()=>browserHistory.push('/login')}*/
           showMenuIconButton={this.props.isLoggedin? true:false}
         />

         <Drawer open={this.state.open}
            docked={false}
            width={200}
            onRequestChange={(open) => this.setState({open})}
         >
         
         <Link to="/dashboard"><MenuItem onTouchTap={this.handleClose}> <FlatButton label="Dashboard"/></MenuItem></Link>
          <Link to="/registerdonor"><MenuItem onTouchTap={this.handleClose}> <FlatButton label="Register As Donor"/></MenuItem></Link>
          <Link to="/requiredbloodlist"><MenuItem onTouchTap={this.handleClose}> <FlatButton label="Blood Require"/></MenuItem></Link>
        
        </Drawer>
</div>
        
       {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(App);
