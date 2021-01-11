import React from 'react';
import {  StyleSheet, Image, FlatList } from 'react-native';
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
    imgSource3: string

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
            id:2,
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
    ]`*/

    

    const renderItem = () => { return  <Image style={styles.image} source={{ uri: imgSource1}} />}
    
    return (
        /*  <View >
              <Text>TODO ClientsSection </Text>
              <Image style={styles.image} source={{ uri:imgSource2  }} />
              <Image style={styles.image} source={{ uri: imgSource2 }} />
              <Image style={styles.image} source={{ uri: imgSource3}} />
  
              {/*<Image source={{ uri: clientimage1 }} style={styles.image} />
      </View>*/

        <FlatList
        horizontal
            data={listData}
            numColumns={1} 
            renderItem={renderItem}

        />
    );
}
const styles = StyleSheet.create({

    image: {
        paddingHorizontal:30,
        marginHorizontal: 20,
        width: 200,
        height: 200,
        justifyContent: 'center',
    },
    /* Header.defaultProps = {
        menu: [{ name: 'Angola', component: Home() },
        ]
    } */
});

ClientsSection.defaultProps = {

    imgSource1: CUSTOMON.IMAGE_SERVER + 'image/more-services-1.jpg',
    imgSource2: CUSTOMON.IMAGE_SERVER + 'image/more-services-2.jpg',
    imgSource3: CUSTOMON.IMAGE_SERVER + 'image/more-services-3.jpg'

}
export default ClientsSection; 