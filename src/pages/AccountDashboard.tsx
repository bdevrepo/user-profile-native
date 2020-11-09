import React from 'react';
import { View, Button } from 'react-native';
//import User from '../components/User';

{/* <IdentificacaoRequerente/>
<DireitosArtisticosLiterario/>
<AutenticacaoAssinatura/> */}

const AccountDashboard = () => {
    const submitHandler =() => {
        console.log('teste');
    }
        return (
            <View>
                {/* <Card>
                    <Card.Title>Identificação Requerente</Card.Title>
                    <Card.Divider />
                    <View>
                        <User parentReq={this.callBackReq.bind(this)} />
                    </View>
                </Card> */}
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