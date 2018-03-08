 import { DonorAction } from '../action/donorAction';

const INITIAL_STATE = {
    isProcessing : false,
    isError : false,
    errorMessage: {},
    // isRegisteredDonor :[],
    donorDetail : {},
    isDetailUpdated: false,
    donorArray: [],
    requireBloodArray: [],
    isRequiredBlood: false
}

export const DonorReducer = (state = INITIAL_STATE, action)=>{
    // console.log('action', action.value);
    switch(action.type){
        case DonorAction.REGISTER_DONOR:
            return Object.assign({}, state, { isProcessing:true, isError:false,isDetailUpdated:false} );
        case DonorAction.REGISTER_DONOR_SUCCESSFUL:
             return Object.assign({}, state, { donorDetail:action.value, isProcessing:false, isError:false, isDetailUpdated:true})
        case DonorAction.GET_DONOR_LIST_SUCCESSFUL:
            console.log('action.payload',action.payload)
            return Object.assign({}, state,{donorArray: action.payload});
        case DonorAction.GET_REQUIRE_LIST:
            console.log('action.payload',action.payload)
            return Object.assign({}, state,{isRequiredBlood: true, requireBloodArray: action.payload});
        case DonorAction.GET_DONOR_DETAIL:
            return Object.assign({},state,{donorDetail:{}})
        case DonorAction.GET_DONOR_DETAIL_SUCCESSFUL:
            return Object.assign({},state,{donorDetail : action.payload})
        default:
            return state
    }
}