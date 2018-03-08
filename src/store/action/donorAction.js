export class DonorAction {
    static REGISTER_DONOR = 'REGISTER_DONOR';
    static REGISTER_DONOR_SUCCESSFUL = 'REGISTER_DONOR_SUCCESSFUL';
    static REGISTER_DONOR_REJECTED = 'REGISTER_DONOR_REJECTED';
    static GET_DONOR_LIST_SUCCESSFUL = 'GET_DONOR_LIST_SUCCESSFUL';
    static GET_REQUIRE_LIST = 'GET_REQUIRE_LIST';
    static GET_DONOR_DETAIL_SUCCESSFUL = 'GET_DONOR_DETAIL_SUCCESSFUL';
    static GET_DONOR_DETAIL = "GET_DONOR_DETAIL";
    static registerDonor (){
    return{
        type: DonorAction.REGISTER_DONOR
    }
}
    static registerDonorSuccessful(donorData){
        console.log('donor data',donorData);
        return{
            type: DonorAction.REGISTER_DONOR_SUCCESSFUL,
            value: donorData
        }
    }
    static getDonorListSuccessful(donorInfo){
        return{
            type: DonorAction.GET_DONOR_LIST_SUCCESSFUL,
            payload: donorInfo
        }
    }
    static getRequireList(reqiureInfo){
        return{
            type: DonorAction.GET_REQUIRE_LIST,
            payload: reqiureInfo
        }
    }
    static getDonorDetail(){
        return{
        type: DonorAction.GET_DONOR_DETAIL,
    }
    }
    static getDonorDetailSuccessful(detail){
        console.log(detail)
        return{
            type: DonorAction.GET_DONOR_DETAIL_SUCCESSFUL,
            payload: detail
        }
    }
}
