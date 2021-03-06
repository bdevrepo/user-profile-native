import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        //margin: 10,
        alignSelf:'center',
        alignItems: 'stretch',
        resizeMode: 'cover',
        backgroundColor: 'white',
    },
    baseText: {
        backgroundColor: "white",
        //alignSelf:'flex-start',
        //alignItems:'baseline',
        alignContent:'space-around',
        marginTop: 10,
        marginLeft:8,
        fontSize: 10,
    },
    titleText: {
        textAlign: "center",
        backgroundColor: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom:10
    },
    baseInput: {
        borderWidth:0,
        borderBottomWidth:1,
        fontSize: 15,
        fontFamily: 'Avenir-Medium',
        //color: 'black',
        color: '#444444',
        height:40 ,
        backgroundColor: "white",
        padding:5
        /* backgroundColor: "white",
        width: 350,
        height: 40,
        borderRadius: 5,
        fontSize: 14,
        // borderWidth: 0,
        // alignItems: "stretch",
        // borderBottomWidth: 1,
        margin: 8, */
    },
    checkboxLabel: {
        margin: 8,
        //fontFamily: "Cochin",
    },
    viewButton: {
        margin:20
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});