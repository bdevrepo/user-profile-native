import React, { useEffect } from 'react';
import { View, Text,  Button } from 'react-native';
//import FloatingLabelInput from './FloatingLabelInput';
//var contactSectionData = {};



const ContactSection = () => {
    //const [name, setName] = useState(null);
    //const [email, setEmail] = useState(null);
    //const [subjet, setSubjet] = useState(null);
    //const [message, setMessage] = useState(null);


    useEffect(() => {
        /* const ContactSection = {
            contactSection: '',
        } */

        //ContactSection["ContactSection"] = ContactSection;
    });


    return (
        <View >
            <View ><h2>ContactUs </h2></View>
            <view><Text>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</Text>
            </view>
            <br></br>
            <Text >A108 Adam Street </Text>
            <Text >New York, NY 535022</Text>
            <Text >info@example.com</Text>
            <Text >+1 5589 55488 55s</Text>
            {/*** Usar FloatingLabelInput */}
            {/* <Input
                ///  style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Your Name"
                placeholderTextColor="grey"
                numberOfLines={1}
                multiline={true}
                onChangeText={text => setName(null)}
            /> */}
            {/* <Input
                ///  style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Your Email"
                placeholderTextColor="grey"
                numberOfLines={1}
                multiline={true}
                onChangeText={text => setEmail(null)}
            /> */}
            {/* <Input
                ///  style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Subject"
                placeholderTextColor="grey"
                numberOfLines={1}
                multiline={true}
                onChangeText={text => setSubjet(null)}
            /> */}
            {/* <Input
                ///  style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Message"
                placeholderTextColor="grey"
                numberOfLines={1}
                multiline={true}
                onChangeText={text => setMessage(null)}
            /> */}
            <Text >Loading</Text>
            <Text >Your message has been sent. Thank you!</Text>
            <view>
                <Button
                    title="Send Message"
                    onPress={() => null}>Gravar</Button>
            </view>
        </View>
    );
}


/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default ContactSection;