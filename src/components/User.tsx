import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Picker,
    CheckBox
} from 'react-native';

const listDocType = [
    {
        label: 'CNI',
        value: 'CNI'
    },
    {
        label: 'Passaporte',
        value: 'Passaporte'
    },
];
const listCountry = [
    {
        label: 'Angola',
        value: 'Angola'
    },
    {
        label: 'Moçambique',
        value: 'Moçambique'
    },
    {
        label: 'Holanda',
        value: 'Holanda'
    },
    {
        label: 'Cabo Verde',
        value: 'Cabo Verde'
    },
];
var idetReqData = {};

const IdentificacaoRequerente = () => {
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
            checkedProprio: false,
            checkedEditor: false,
            namecheckedTitularreq: false,
            checkedRepre: false
        }

        idenReq["nameReq"] = nameReq;
        idenReq["docTypeReq"] = docTypeReq;
        idenReq["emailReq"] = emailReq;
        idenReq["mobileReq"] = mobileReq;
        idenReq["phoneReq"] = phoneReq;
        idenReq["addressReq"] = addressReq;
        idenReq["postalCodeReq"] = postalCodeReq;
        idenReq["placeReq"] = placeReq;

        // TODO: get value checked
        idenReq["checkedProprio"] = checkedProprio;
        idenReq["checkedEditor"] = checkedEditor;
        idenReq["namecheckedTitularreq"] = checkedTitular;
        idenReq["checkedRepre"] = checkedRepre;

        console.log('idetReqData: ', idetReqData);
    });
    return (
        <View style={styles.container}>

            <Text style={styles.titleText}>Informações pessoais</Text>
            <Text style={styles.baseText}>Nome do requerente</Text>
            <TextInput
                style={styles.baseInput}
                placeholder='Nome do requerente'
                onChangeText={text => setNameReq(text)}
            />
            <Text style={styles.baseText}>Tipo do documento de identificação</Text>

            <Picker
                style={styles.baseInput}
                selectedValue={docTypeReq}
                onValueChange={(itemValue) => setDocTypeReq(itemValue)}
            >
                {listDocType.map((item) =>
                    <Picker.Item label={item.label} value={item.value} />
                )}
            </Picker>

            <Text style={styles.baseText}>E-mail</Text>
            <TextInput
                style={styles.baseInput}
                placeholder="E-mail"
                onChangeText={text => setEmailReq(text)}
            />
            <TextInput
                style={styles.baseInput}
                placeholder="Telefone"
                onChangeText={text => setPhoneReq(text)}
            />
            <Text style={styles.baseText}>Telemóvel</Text>
            <TextInput
                style={styles.baseInput}
                placeholder="Telemóvel"
                onChangeText={text => setMobileReq(text)}
            />
            <Text style={styles.baseText}>Morada</Text>
            <TextInput
                style={styles.baseInput}
                placeholder="Morada"
                onChangeText={text => setAddressReq(text)}
            />
            <Text style={styles.baseText}>Codigo Postal</Text>
            <TextInput
                style={styles.baseInput}
                placeholder="Codigo Postal"
                onChangeText={text => setPostalCodeReq(text)}
            />
            <Text style={styles.baseText}> Localidade </Text>
            <TextInput
                style={styles.baseInput}
                placeholder="Localidade"
                onChangeText={text => setPlaceReq(text)}
            />

            <Text style={styles.baseText}>Pais</Text>
            <Picker
                style={styles.baseInput}
                selectedValue={countryReq}
                onValueChange={(itemValue) => setCountryReq(itemValue)}
            >
                {listCountry.map((item) =>
                    <Picker.Item label={item.label} value={item.value} />
                )}
            </Picker>

            <View style={{ flexDirection: "row", margin:10,alignSelf: "center" }}>
                <CheckBox
                    value={checkedProprio}
                    onValueChange={() => {
                        checkedProprio ? setCheckedProprio(false) : setCheckedProprio(true)
                    }}
                />
                <Text style={styles.checkboxLabel}>O Proprio</Text>
                <CheckBox
                    value={checkedEditor}
                    onValueChange={() => {
                        checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true)
                    }}
                />
                <Text style={styles.checkboxLabel}>Editor</Text>
                <CheckBox
                    value={checkedRepre}
                    onValueChange={() => {
                        checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true)
                    }}
                />
                <Text style={styles.checkboxLabel}>Representante</Text>
                <CheckBox
                    value={checkedTitular}
                    onValueChange={() => {
                        checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true)
                    }}
                />
                <Text style={styles.checkboxLabel}>Titular Sucessivo</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    baseText: {
        backgroundColor: "white",
        //fontFamily: "Cochin",
        marginTop: 10
    },
    titleText: {
        backgroundColor: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    baseInput: {
        backgroundColor: "white",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    checkboxLabel: {
        margin: 8,
        //fontFamily: "Cochin",
      },
});

export default IdentificacaoRequerente;