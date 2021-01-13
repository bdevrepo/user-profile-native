import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { CUSTOMON } from './../store/constants';

//var clienteSecData = {};

/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} 

const imgSource = 'https://localhost:3443/image/more-services-1.jpg;base64';

const ClientsSection = (props: any) => {
    const [clienteSec, setClienteSec] = useState("");

    useEffect(() => {
        const ClientsSection = {
            clienteSec: '',
        }

        ClientsSection["clienteSec"] = clienteSec;
    });*/

    
//const path = require('path');
type ClientsSection = {
    imgSource1: string,
    imgSource2: string,
    imgSource3: string,

}

const ClientsSection = ({
    imgSource1, imgSource2, imgSource3 }: ClientsSection) => {
    console.log('imgSource: ', imgSource1);

    const listData = [
        {
            id: 1,
            imgSource1
        },
        {
            id: 2,
            imgSource2
        },
        {
            id: 3,
            imgSource3,

        },
    ];

    /*const myData = [
        { id: 1,
         }, 
        { id: 2 }
    ]*/

    const renderItem = ({ item }) => {
        // console.log('item',item);   <Image style={styles.image} source={{ uri: item.imgSource1}} />}
        return (
            <View style={styles.rowContainer} >
                <Image style={styles.image} source={{ uri: item.imgSource1 }} />
                <Image style={styles.image} source={{ uri: item.imgSource2 }} />
                <Image style={styles.image} source={{ uri: item.imgSource3 }} />
            </View >)
    };

    return (

        <FlatList
            data={listData}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}
const styles = StyleSheet.create({

    image: {
        width: 100,
        height: 100,
        flexDirection: "row",
        marginHorizontal:-10,
    },
    rowContainer: {
        flexDirection: "row",

    }
});

ClientsSection.defaultProps = {

    imgSource1: CUSTOMON.IMAGE_SERVER + 'image/more-services-1.jpg',
    imgSource2: CUSTOMON.IMAGE_SERVER + 'image/more-services-2.jpg',
    imgSource3: CUSTOMON.IMAGE_SERVER + 'image/more-services-3.jpg'

}
export default ClientsSection; 