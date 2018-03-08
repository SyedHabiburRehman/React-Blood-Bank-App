import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as MUI from 'material-ui';
import FirebaseRegisterDonor from '../../store/middleware/registerMiddleware';


const mapStateToProps=(state)=>{
    console.log(state.DonorReducer)
    return{
        donor: state.DonorReducer.donorDetail,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getDonorDetail: (donorId)=>{
            console.log(donorId)
            dispatch(FirebaseRegisterDonor.getDonordetail(donorId));
        }
    }
}
class DonorDetail extends Component{
    componentWillMount(){
        this.props.getDonorDetail(this.props.params.id)
    }
    render(){
        return(
            <div>
                <p>{this.props.donor.name}</p>
                <p>{this.props.donor.bloodgroup}</p>
                <p>{this.props.donor.contact}</p>
                <p>{this.props.donor.address}</p>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DonorDetail);