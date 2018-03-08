import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FirebaseRegisterDonor from '../../store/middleware/registerMiddleware';
import FirebaseRequireDonorList from '../../store/middleware/requireBloodMiddleware';
import * as MUI from 'material-ui';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';



const mapStateToProps = (state) => {
    // console.log('state', state)
    return {
        donor: state.DonorReducer.donorDetail,
        donorArray: state.DonorReducer.donorArray,
        // isRequiredBlood : state.DonorReducer.isRequiredBlood
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDonorlist: () => {
            dispatch(FirebaseRegisterDonor.getDonorList());
        },
        getDonorDetail: (donorId)=>{
            console.log(donorId)
            dispatch(FirebaseRegisterDonor.getDonordetail(donorId));
        }
        // getRequireBloodList: (requireBloodGroup)=>{
        //     dispatch(FirebaseRequireDonorList.getRequireBloodGroup(requireBloodGroup));
        // }
    }
}

class Dashboard extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
        // this.clickRequire = this.clickRequire.bind(this);
        this.state = {
            open: false,
        };
    }
    handleClose(){
        this.setState({open: false})
    }
    handleClick(id){
        this.props.getDonorDetail(id)
        
        this.setState({open : true})

        // uncomment this for rendering Donor Detail in separate component 
        // console.log(id)
        // browserHistory.push("/dashboard/donordetail/" + id)
        
    }
    componentWillMount(){
             this.props.getDonorlist();
    }
    // componentWillReceiveProps(nextProps){
    //     console.log("next props",nextProps);
    //     if(nextProps.isRequiredBlood){
    //         browserHistory.push('/requiredbloodlist');
    //     }
    // }

    // handleChange(event,index,requireBloodGroup){
    //     this.setState({requireBloodGroup});
    //     console.log("require Blood group", requireBloodGroup);
    //     var b = requireBloodGroup;
    //     this.props.getRequireBloodList(b);
    // }
        clickRequire(){
        browserHistory.push("/requiredbloodlist")
    }
    openDialogForDonorDetail(){
        var details = (
        <div>
                <MUI.Dialog 
                    title="Donor Detail" 
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    <p>Name: {this.props.donor.name}</p>
                    <p>Blood Group: {this.props.donor.bloodgroup}</p>
                    <p>Contact: {this.props.donor.contact}</p>
                    <p>address: {this.props.donor.address}</p>
                </MUI.Dialog>
            </div>
        )
        return details;
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
            subHeader :{
        fontWeight:"Bold",
},

            
        };

        return (
            <div  >
                <div className="App2">
                <h1 >Donor List</h1>
                </div>
                {console.log('donor array', this.props.donorArray)}
                {this.props.donorArray.map((v, i) => {
                    return (
                        <div key={i}>
                            <List>
                                <ListItem                    
                                    leftAvatar={<Avatar icon={<Person />} />}
                                    rightIcon={<ActionInfo />}
                                    primaryText={v.name}
                                    secondaryText={"Blood Group: "+ v.bloodgroup}
                                    onTouchTap={()=>this.handleClick(v.uid)}
                                />
                                <Divider />
                            </List>
                        </div>
                        )
                    })
                }
                {this.openDialogForDonorDetail()}
                
            </div>  
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);