import firebase from 'firebase';
import { DonorAction } from '../action/donorAction';

export default class FirebaseRequireDonorList{
    static getRequireBloodGroup(bloodGroup){
        return (dispatch) =>{
        console.log(bloodGroup);
        var bloodGroups = []
        var array = []
        var Aplus =["A+", "O+", "A-", "O-"];
        var Bplus =["B+","O+","B-","O-"];
        var ABplus =["AB+","AB-","O+","O-","A+","A-","B+","B-"];
        var Oplus =["O+","O-"];
        var Ominus =["O-"];
        var ABminus =["AB-","O-","A-","B-"];
        var Bminus =["B-","O-"];
        var Aminus =["A-","O-"];
        switch (bloodGroup){
            case "A+":
                bloodGroups.push(Aplus);
                break;
            case "B+":
                bloodGroups.push(Bplus);
                break;
            case "AB+":
                bloodGroups.push(ABplus);
                break;
            case "O+":
                bloodGroups.push(Oplus);
                break;
            case "O-":
                bloodGroups.push(Ominus);
                break;
            case "AB-":
                bloodGroups.push(ABminus);
                break;
            case "B-":
                bloodGroups.push(Bminus);
                break;
            case "A-":
                bloodGroups.push(Aminus);
                break;
                default: {
                    return bloodGroup
                }
        }
        
        bloodGroups.map((val, index) => {
      return val.map((v, i) => {
        return (
          firebase.database().ref().child('donorRegisterList/' + v + '/').once('value', (snapshot) => {
            var data = snapshot.val();
            console.log("data",data)
            for (var prop in data) {
              array.push(data[prop]);
              console.log("array",array);
            }
          })
        )
      })
    })
    dispatch(DonorAction.getRequireList(array)) 
  }
}
}