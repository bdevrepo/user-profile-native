import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Picker,
    CheckBox
} from 'react-native';
//import { FloatingLabelInput, setGlobalStyles } from 'react-native-floating-label-input';
import FloatingLabelInput from './FloatingLabelInput';
import GlobalStyles from './../assets/style/GlobalStyles';
var idetReqData = {};

const User = (props: any) => {
    const [docTypeReq, setDocTypeReq] = useState("CNI");
    const [nameReq, setNameReq] = useState('');
    const [emailReq, setEmailReq] = useState('');
    const [mobileReq, setMobileReq] = useState('');
    const [phoneReq, setPhoneReq] = useState('');
    const [addressReq, setAddressReq] = useState('');
    const [postalCodeReq, setPostalCodeReq] = useState('');
    const [placeReq, setPlaceReq] = useState('');
    const [countryReq, setCountryReq] = useState('');

    const [checkedProprio, setCheckedProprio] = useState(false);
    const [checkedEditor, setCheckedEditor] = useState(false);
    const [checkedTitular, setCheckedTitular] = useState(false);
    const [checkedRepre, setCheckedRepre] = useState(false);

    useEffect(() => {
        const user = {
            nameReq: '',
            docTypeReq: '',
            emailReq: '',
            mobileReq: '',
            phoneReq: '',
            addressReq: '',
            postalCodeReq: '',
            placeReq: '',
            checkedProprio: false,
            checkedEditor: false,
            namecheckedTitularreq: false,
            checkedRepre: false
        }

        user["nameReq"] = nameReq;
        user["docTypeReq"] = docTypeReq;
        user["emailReq"] = emailReq;
        user["mobileReq"] = mobileReq;
        user["phoneReq"] = phoneReq;
        user["addressReq"] = addressReq;
        user["postalCodeReq"] = postalCodeReq;
        user["placeReq"] = placeReq;

        // TODO: get value checked
        user["checkedProprio"] = checkedProprio;
        user["checkedEditor"] = checkedEditor;
        user["namecheckedTitularreq"] = checkedTitular;
        user["checkedRepre"] = checkedRepre;

        idetReqData = user;
        //console.log(' A editar', idetReqData);
    });
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Informações pessoais</Text>

            {/* <FloatingLabelInput
          label={userNameLabel}
         // value={username}
          blurOnSubmit={false}
          maxLength={100}
          onChangeText={(value: any) => handleUsernaChange(value)}
        /> */}

            <FloatingLabelInput
                value={nameReq}
                title='Nome do requerente'
                onChangeText={(text: any) => {
                    setNameReq(text);
                    props.parentUser(idetReqData);
                }}
            />
            <Text style={GlobalStyles.baseText}>Documento identificação</Text>

            <Picker
                style={GlobalStyles.baseInput}
                selectedValue={docTypeReq}
                onValueChange={(itemValue) => {
                    setDocTypeReq(itemValue);
                    props.parentUser(idetReqData);
                }}
            >
                {props.listDocType.map((item: any, key: any) =>
                    <Picker.Item key={key} label={item.label} value={item.value} />
                )}
            </Picker>

            <FloatingLabelInput
                value={emailReq}
                title="E-mail"
                onChangeText={(text: any) => { setEmailReq(text); props.parentUser(idetReqData); }}
            />
            <FloatingLabelInput
                value={phoneReq}
                title="Telefone"
                onChangeText={(text: any) => { setPhoneReq(text); props.parentUser(idetReqData); }}
            />
            <FloatingLabelInput
                value={mobileReq}
                title="Telemóvel"
                onChangeText={(text: any) => { setMobileReq(text); props.parentUser(idetReqData); }}
            />
            <FloatingLabelInput
                value={addressReq}
                title="Morada"
                onChangeText={(text: any) => { setAddressReq(text); props.parentUser(idetReqData); }}
            />
            <FloatingLabelInput
                value={postalCodeReq}
                title="Codigo Postal"
                onChangeText={(text: any) => { setPostalCodeReq(text); props.parentUser(idetReqData); }}
            />
            <FloatingLabelInput
                value={placeReq}
                title="Localidade"
                onChangeText={(text: any) => { setPlaceReq(text); props.parentUser(idetReqData); }}
            />

            <Text style={GlobalStyles.baseText}>Pais</Text>
            <Picker
                style={GlobalStyles.baseInput}
                selectedValue={countryReq}
                onValueChange={(itemValue) => { setCountryReq(itemValue); props.parentUser(idetReqData); }}
            >
                {props.listCountry.map((item: any, key: any) =>
                    <Picker.Item key={key} label={item.label} value={item.value} />
                )}
            </Picker>

            <View style={{ flexDirection: "row", margin: 10, alignSelf: "center" }}>
                <CheckBox
                    value={checkedProprio}
                    onValueChange={() => {
                        checkedProprio ? setCheckedProprio(false) : setCheckedProprio(true);
                        props.parentUser(idetReqData);
                    }}
                />
                <Text style={GlobalStyles.checkboxLabel}>O Proprio</Text>
                <CheckBox
                    value={checkedEditor}
                    onValueChange={() => {
                        checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true);
                        props.parentUser(idetReqData);
                    }}
                />
                <Text style={GlobalStyles.checkboxLabel}>Editor</Text>
                <CheckBox
                    value={checkedRepre}
                    onValueChange={() => {
                        checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true);
                        props.parentUser(idetReqData);
                    }}
                />
                <Text style={GlobalStyles.checkboxLabel}>Representante</Text>
                <CheckBox
                    value={checkedTitular}
                    onValueChange={() => {
                        checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true);
                        props.parentUser(idetReqData);
                    }}
                />
                <Text style={GlobalStyles.checkboxLabel}>Titular Sucessivo</Text>
            </View>
        </View>
    );
}

/* setGlobalStyles.labelStyles = {
    color: 'black',
    fontSize:14,
    // any styles you want to generalize to your floating label
}; */

/* setGlobalStyles.inputStyles = {
    // any styles you want to generalize to your input
    color: 'black',
    borderRadius: 5,
    minHeight: 40,
    margin: 8,
    width: 350,
    padding: 4,
    fontSize: 14,
}; */

User.defaultProps = {
    listDocType: [{ label: 'Bilhete de Identidade', value: 'BI' },
    { label: 'Cartão Nacional de Identificação', value: 'CNI' },
    { label: 'Passaporte', value: 'Passaporte' },],
    listCountry: [{ label: 'Angola', value: 'Angola' },
    { label: 'Cabo Verde', value: 'Cabo Verde' },
    { label: 'Moçambique', value: 'Moçambique' },
    { label: 'Holanda', value: 'Holanda' },
    ]
};
export default User;