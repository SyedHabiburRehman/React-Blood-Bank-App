import React, { Component } from 'react';
import { connect } from 'react-redux';
import FirebaseRequireDonorList from '../../store/middleware/requireBloodMiddleware';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { orange500, blue500 } from 'material-ui/styles/colors';

const mapStateToProps = (state) => {
    console.log("state",state);
    return{
        requireBloodArray: state.DonorReducer.requireBloodArray
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRequireBloodList: (requireBloodGroup)=>{
            dispatch(FirebaseRequireDonorList.getRequireBloodGroup(requireBloodGroup));
        }
    }
}
 class RequiredBloodList extends Component{
     constructor(){
        super();
        this.state = {
            requireBloodGroup: ""
        };
    }

     handleChange(event,index,requireBloodGroup){
        this.setState({requireBloodGroup});
        console.log("require Blood group", requireBloodGroup);
        var b = requireBloodGroup;
        this.props.getRequireBloodList(b);
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
                <h1>Required List</h1>
                <div>
                    <div>
                    <SelectField
                        floatingLabelText="Require Blood"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        value={this.state.requireBloodGroup}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={1} primaryText="Blood Group" disabled />
                        <MenuItem value='A+' primaryText="A+" />
                        <MenuItem value='B+' primaryText="B+" />
                        <MenuItem value='AB+' primaryText="AB+" />
                        <MenuItem value='O+' primaryText="O+" />
                        <MenuItem value='O-' primaryText="O-" />
                        <MenuItem value='AB-' primaryText="AB-" />
                        <MenuItem value='B-' primaryText="B-" />
                        <MenuItem value='A-' primaryText="A-" />
                {console.log('blood array', this.props.requireBloodArray)}
                    </SelectField>
                    </div>
                </div>
                </div>
                {this.props.requireBloodArray.map((v, i) => {
                    return (
                        <div key={i}>
                            <List>
                            <ListItem                    
                                leftAvatar={<Avatar icon={<Person />} />}
                                rightIcon={<ActionInfo />}
                                primaryText={v.name}
                                secondaryText={"Blood Group: "+ v.bloodgroup}
                            />
                            <Divider />
                            </List>
                        </div>
                        )
                    })
                }
           </div>
        )
     }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(RequiredBloodList);