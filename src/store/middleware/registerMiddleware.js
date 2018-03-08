import { DonorAction } from '../action/donorAction';
import firebase from 'firebase';


export default class FirebaseRegisterDonor {
    static registerDonorUserOnFirebase(userData) {
        console.log("user data", userData)
        return (dispatch) => {
            var userId = firebase.auth().currentUser.uid;
            var blood = userData.bloodgroup;
            console.log(userId);
            firebase.database().ref('/')
                .child(`donorRegisterList/` + blood + `/` + userId + `/`)
                .set(userData)
                .then((donorResponseFromFirebase) => {
                    console.log("donor response", donorResponseFromFirebase);
                    console.log(userData);
                    dispatch(DonorAction.registerDonorSuccessful(userData))
                })
        }
    }
    static getDonorList() {

        return (dispatch) => {
            firebase.database().ref().child("donorRegisterList").on('value', (snapshot) => {
                console.log('snapshot ', snapshot.val());
                var data = snapshot.val();
                console.log('data', data)

                var Array = [];
                for (var props in data) {
                    console.log("props", props)
                    for (var b in data[props]) {
                        console.log("b", b)
                        Array.push(data[props][b])
                    }
                }
                dispatch(DonorAction.getDonorListSuccessful(Array));
            });
        }
    }
    static getDonordetail(donorId) {
        console.log(donorId)
        return (dispatch) => {
            dispatch(DonorAction.getDonorDetail());
            firebase.database().ref('/').child("donorRegisterList").on("value", (snapshot) => {
                console.log("donor Detail", snapshot.val())
                var data = snapshot.val();
                var Array = [];
                for (var props in data) {
                    console.log("props", props)
                    for (var b in data[props]) {
                        console.log("b", b)
                        Array.push(data[props][b])
                    }
                }
                console.log(Array)
                for (var i = 0; i < Array.length; i++) {
                    if (Array[i].uid === donorId) {
                        const detail = Array[i]
                        console.log("found" + detail)
                        dispatch(DonorAction.getDonorDetailSuccessful(Array[i]))
                        // console.log(detail)
                    }
                }
            })
        }
    }
}