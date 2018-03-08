import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
// import * as firebase from 'firebase';
// import { FirebaseAuthService } from '.././store/middleware/auth';

const mapStateToProps = (state)=>{
  console.log('state', state);
  return{
      user : state.authUser,
      isLoggedin : state.isLoggedin
  }
}

class Home extends Component {
     componentWillMount() {
        setTimeout(() => {
            console.log(' home page', this.props)
        }, 100)
} 

    render() {
    console.log(this.props.user, '*************************************');
        return (
            <div>
                <h1>
                    Home page
                    <br />
                    {/*<Link to="/">home</Link>*/}

                    <p>{this.props.user.firstName}</p>
                </h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Home);
