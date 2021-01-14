import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var testiSectionData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */
    
const TestimonialsSection = (props: any) => {
    const [testiSection, settestiSection] = useState("");

    useEffect(() => {
        const TestimonialsSection = {
            testiSection: '',
    }

    TestimonialsSection["testiSection"] = testiSection;
    });

    return (
        <View >
            <h2>Testimonials</h2>
            <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
<Text> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</Text>
<h3>Sara Wilsson</h3>
<Text> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</Text>
<h3>Jena Karlis</h3>
<h4>Store Owner</h4>
<Text>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</Text>
<h3>Matt Brandon</h3>
<h4>Freelancer</h4>
<Text>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</Text>
<h3>John Larson</h3>
<h4>Entrepreneur</h4>
<Text>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</Text>
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default TestimonialsSection;