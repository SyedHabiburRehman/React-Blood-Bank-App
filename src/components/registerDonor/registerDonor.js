import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FirebaseRegisterDonor from '../../store/middleware/registerMiddleware';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { orange500, blue500 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

// import '../../App.css';

const mapStateToProps = (state) => {
    console.log('donor state', state.DonorReducer)
    return {
        isDetailUpdated: state.DonorReducer.isDetailUpdated,
        // donor: state.DonorReducer.donorDetail,
        uid: state.AuthReducer.authUser.uid,
        firstname: state.AuthReducer.authUser.firstName,
        lastname: state.AuthReducer.authUser.lastName        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (donorUser) => {
            dispatch(FirebaseRegisterDonor.registerDonorUserOnFirebase(donorUser));
        }
    }
}
class RegisterDonor extends Component {
    constructor(props){
    super(props);
    this.handleChangeInput= this.handleChangeInput.bind(this);
    console.log("component props ",props);
    this.state = {
      bloodgroup: "",
      fullname:"",
      address:"",
      contact:"",
      dateOfBirth:new Date(),
    };
    }
componentWillMount(){
    this.setState({
        fullname:(this.props.firstname + " " + this.props.lastname),
        // address:this.props.authUser.address,
        // contact:this.props.authUser.contact,
        // bloodgroup: this.props.authUser.bloodgroup,
        // dateOfBirth:this.props.authUser.dateOfBirth?new Date(this.props.authUser.dateOfBirth):new Date(),
    })
}
    componentWillReceiveProps(nextProp){ 
        console.log('next prop', nextProp)
        if(nextProp.isDetailUpdated){
            alert("Registered")
            browserHistory.push('/dashboard');
  }
}

    handleSave() {
        var uid = this.props.uid;
        let donorUser = {
            uid,
            name: this.refs.fullname.getValue(),
            address: this.refs.address.getValue(),
            contact: this.refs.contact.getValue(),
            bloodgroup: this.state.bloodgroup
        }
        console.log(donorUser.bloodgroup);
        this.props.register(donorUser);
    }
    handleChange(event ,index , bloodgroup){
        event.preventDefault();
        this.setState({bloodgroup})
        console.log(bloodgroup);
    }
    handleChangeInput(event,index,fullname){
        
        this.setState({fullname})
        // console.log("E ",e);
        console.log(fullname)
    }

    render() {
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

        return (
        
            <div >
                <div className="App2">
                    <Paper>
                {console.log('name' , this.props.name)}
                <br />
                <h2>Donor Regestration</h2>

                <TextField
                    ref="fullname"
                    /*value={this.props.firstname + " " +  this.props.lastname}*/
                    value={this.state.fullname}
                    floatingLabelText="Full Name"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onChange={this.handleChangeInput}
                /><br />
                <TextField
                    ref="address"
                    floatingLabelText="Address"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    /*onChange={this.handleChangeInput}*/

                /><br />
                <TextField
                    ref="contact"
                    floatingLabelText="Contact No."
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    /*onChange={this.handleChangeInput}*/
                /><br />
                <SelectField
                    floatingLabelText="Blood Group"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    value={this.state.bloodgroup}
                    onChange={this.handleChange.bind(this)}
                >
                    {/*<MenuItem value={1} primaryText="Blood Group" disabled />*/}
                    <MenuItem value='A+' primaryText="A+" />
                    <MenuItem value='B+' primaryText="B+" />
                    <MenuItem value='AB+' primaryText="AB+" />
                    <MenuItem value='O+' primaryText="O+" />
                    <MenuItem value='O-' primaryText="O-" />
                    <MenuItem value='AB-' primaryText="AB-" />
                    <MenuItem value='B-' primaryText="B-" />
                    <MenuItem value='A-' primaryText="A-" />
                </SelectField>
                {/*<TextField
                    ref="bloodgroup"
                    floatingLabelText="Blood Group"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />*/}
                <br />

                <DatePicker
                    ref="dateOfBirth"
                    floatingLabelText="Date Of Birth"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                value={this.state.dateOfBirth}
                /*onChange={this.handleChangeInDate}*/
                />

                <div style={styles.buttons} className="button">
                    <Link to="/">
                        <RaisedButton label="Cancel" />
                    </Link>

                    <RaisedButton label="Save"
                        style={styles.saveButton}
                        onTouchTap={this.handleSave.bind(this)}
                        primary={true} />
                </div>
                </Paper>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDonor);