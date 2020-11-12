import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';



var idetReqData = {};

const PagInicial = () => {

    const [nameReq, setNameReq] = useState('');
   // const [docTypeReq, setDocTypeReq] = useState('');
    const [emailReq, setEmailReq] = useState('');
    const [mobileReq, setMobileReq] = useState('');
    const [phoneReq, setPhoneReq] = useState('');
    const [addressReq, setAddressReq] = useState('');
    const [postalCodeReq, setPostalCodeReq] = useState('');
    const [placeReq, setPlaceReq] = useState('');
   // const [countryReq, setCountryReq] = useState('');

    /* const [checkedProprio, setCheckedProprio] = useState(false);
    const [checkedEditor, setCheckedEditor] = useState(false);
    const [checkedTitular, setCheckedTitular] = useState(false);
    const [checkedRepre, setCheckedRepre] = useState(false); */


    useEffect(() => {
        console.log(' A editar');
        const idenReq = {
            nameReq: '',
            docTypeReq: '',
            emailReq: '',
            mobileReq: '',
            phoneReq: '',
            addressReq: '',
            postalCodeReq: '',
            placeReq: '',
            checkedProprio: '',
            checkedEditor: '',
            namecheckedTitularreq: '',
            checkedRepre: ''
        }

        idenReq["nameReq"] = nameReq;
        //idenReq["docTypeReq"] = docTypeReq;
        idenReq["emailReq"] = emailReq;
        idenReq["mobileReq"] = mobileReq;
        idenReq["phoneReq"] = phoneReq;
        idenReq["addressReq"] = addressReq;
        idenReq["postalCodeReq"] = postalCodeReq;
        idenReq["placeReq"] = placeReq;

        // TODO: get value checked
        /*  idenReq["checkedProprio"] = checkedProprio;
         idenReq["checkedEditor"] = checkedEditor;
         idenReq["namecheckedTitularreq"] = checkedTitular;
         idenReq["checkedRepre"] = checkedRepre; */

        console.log('idetReqData: ', idetReqData);
    });
    return (
        <View>

            <Text style={styles.titleText}>Bem-vindo, Hermes Maurício</Text>
            
           
        </View>
    );
}
const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default PagInicial;