import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

/* const listDocType = [
    {
        label: 'CNI',
        value: 'CNI'
    },
    {
        label: 'Passaporte',
        value: 'Passaporte'
    },
]; */

/* const listCountry = [
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
]; */
var idetReqData = {};

const IdentificacaoRequerente = () => {

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

            <Text style={styles.titleText}>Nome do requerente</Text>
            <TextInput
                placeholder='Nome do requerente'
                /* style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} */
                onChangeText={text => setNameReq(text)}
            />


            <Text>Tipo do documento de identificação</Text>

            {/* <DropDownPicker
                items={listDocType}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setDocTypeReq(item.value)}
            /> */}
            <Text>E-mail</Text>
            <TextInput
                placeholder="E-mail"
                onChangeText={text => setEmailReq(text)}
            />
            <TextInput
                placeholder="Telefone"
                onChangeText={text => setPhoneReq(text)}
            />
            <Text>Telemóvel</Text>
            <TextInput
                placeholder="Telemóvel"
                onChangeText={text => setMobileReq(text)}
            />
            <Text>Morada</Text>
            <TextInput
                placeholder="Morada"
                onChangeText={text => setAddressReq(text)}
            />
            <Text>Codigo Postal</Text>
            <TextInput
                placeholder="Codigo Postal"
                onChangeText={text => setPostalCodeReq(text)}
            />
            <Text> Localidade </Text>
            <TextInput
                placeholder="Localidade"
                onChangeText={text => setPlaceReq(text)}
            />

            <Text>Pais</Text>
            {/* <DropDownPicker
                items={listCountry}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setCountryReq(item.value)}
            /> */}
            <View style={{ flexDirection: "row" }}>
                {/* <CheckBox
                    title="O Proprio"
                    checked={checkedProprio}
                    onPress={() => {
                        checkedProprio ? setCheckedProprio(false) : setCheckedProprio(true)
                    }}
                /> */}
                {/* <CheckBox
                    title="Editor"
                    checked={checkedEditor}
                    onPress={() => {
                        checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true)
                    }}
                /> */}
                {/* <CheckBox
                    title="Representante"
                    checked={checkedRepre}
                    onPress={() => {
                        checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true)
                    }}
                /> */}
                {/* <CheckBox
                    title="Titular Sucessivo"
                    checked={checkedTitular}
                    onPress={() => {
                        checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true)
                    }}
                /> */}
            </View>
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

export default IdentificacaoRequerente;