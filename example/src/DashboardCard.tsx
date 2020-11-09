import React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native'

const DashboardCard = () => {
    const onPressLearnMore = () => {
        console.log('teste');
    }
    return (
        <SafeAreaView>
            <View>

                <View>
                    <Text>Registro Artistico</Text>
                    <Text style={{ marginBottom: 10 }}></Text>
                    <Button onPress={onPressLearnMore}
                        title="Learn More" />

                </View>

                <View>
                    <Text>Registo Patente</Text>
                    <Text style={{ marginBottom: 10 }}> </Text>
                    <Button onPress={onPressLearnMore} title='Registar' />

                </View>

                <View>
                    <Text>Pagina teste Component</Text>
                    <Text style={{ marginBottom: 10 }}> </Text>
                    <Button onPress={onPressLearnMore} title='Registar' />
                </View>


            </View>
        </SafeAreaView>

    );
}
export default DashboardCard;