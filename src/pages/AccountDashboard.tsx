import React from 'react';
import { View,Button } from 'react-native';
import User from '../components/User';

var allData = {user:null}
const AccountDashboard = (props:any) => {

    const callBackUser =(data:any) => {
        //console.log('teste', data);
        allData["user"]=data;
    }
    const submitHandler =() => {
        props.parentDash(allData);
    }
        return (
            <View style={{backgroundColor:"white"}}>
                    <View>
                        <User  parentUser={callBackUser.bind} />
                    </View>
                {/* <Card>
                    <Card.Title>Identificação Autor</Card.Title>
                    <Card.Divider />
                    <View>
                        <IdentificacaoAutor parentReq={this.callBackReq.bind(this)} />
                    </View>
                </Card> */}

                {/* <Card>
                    <Card.Title>Autenticacão Assinatura</Card.Title>
                    <Card.Divider />
                    <View>
                        <AutenticacaoAssinatura />
                    </View>
                </Card> */}

                <Button
                    title="Gravar"
                    onPress={submitHandler}>Gravar</Button>
            </View>
        );
        
}

export default AccountDashboard;