import React from 'react';
import { View, Text,Button } from 'react-native';
import User from '../components/User';

const AccountDashboard = () => {
    const submitHandler =() => {
        console.log('teste');
    }
        return (
            <View>
                    <Text>Identificação Requerente</Text>
                    <View>
                        <User /* parentReq={this.callBackReq.bind(this)} */ />
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