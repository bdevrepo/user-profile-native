// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    UIManager,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from './../assets/style/GlobalStyles';

const ExpandableComponent = ({ item, onClickFunction }: any) => {
    //Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);
    const navigation = useNavigation();
    const navigateTo = (page: any) => {
        navigation.navigate(page);
    }
    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View style={{
            // flex: 2,
            //flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
        }}>
            {/*Header of the Expandable List Item*/}
            {item.submenu.length > 0 ?
                // then show submenu
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onClickFunction}
                    style={styles.header}>
                    <Text style={styles.headerText}>
                        {item.menu.charAt(0).toUpperCase()
                            + item.menu.slice(1)}
                        <Image
                            style={{
                                width: 10,
                                height: 8,
                                marginLeft: 8
                            }}
                            source={require('../assets/img/drop-down-arrow.png')}
                        />
                    </Text>

                </TouchableOpacity>
                // then, navigate menu
                : <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigateTo(item.screen)} style={styles.header}>
                    <Text style={styles.headerText}>
                        {item.menu.charAt(0).toUpperCase() + item.menu.slice(1)}
                    </Text>
                </TouchableOpacity>}
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                }}>
                {/*Content under the header of the Expandable List Item*/}
                {item.submenu.map((item: any, key: any) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.content}
                        onPress={() => navigateTo(item.screen)}
                    >
                        <Text style={styles.headerText}>
                            {item.val.charAt(0).toUpperCase() + item.val.slice(1)}
                        </Text>
                        <View style={GlobalStyles.separator} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const Header = (props: any) => {
    const [listDataSource, setListDataSource] = useState(props.menu);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index: any) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];

        array.map((value, placeindex) =>
            placeindex === index
                ? (array[placeindex]['isExpanded'] =
                    !array[placeindex]['isExpanded'])
                : (array[placeindex]['isExpanded'] = false),
        );
        setListDataSource(array);
    };

    return (
        <View style={styles.container}>
            {listDataSource.map((item: any, key: any) => (
                <ExpandableComponent
                    key={item.menu}
                    onClickFunction={() => {
                        updateLayout(key);
                    }}
                    item={item}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingButton: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
        //padding: 10        
    },
    headerText: {
        margin: 5,
        fontSize: 18,
        fontFamily: 'Avenir-Medium',
        color: '#444444',
    },
    content: {
        paddingLeft: 10,
        // paddingRight: 10,
        // backgroundColor: '#fff',
        // marginLeft: 30,

    },

});

Header.defaultProps = {
    menu: [{
        isExpanded: false,
        menu: 'Item 1',
        submenu: [],
    },
    {
        isExpanded: true,
        menu: 'Item 2',
        submenu: [
            { id: 4, val: 'Sub Cat 4' },
            { id: 5, val: 'Sub Cat 5' },
        ],
    },
    {
        isExpanded: false,
        menu: 'Item 3',
        submenu: [
            { id: 7, val: 'Sub Cat 7' },
            { id: 9, val: 'Sub Cat 9' },
        ],
    },
    {
        isExpanded: false,
        menu: 'Item 4',
        submenu: [
            { id: 10, val: 'Sub Cat 10' },
            { id: 12, val: 'Sub Cat 2' },
        ],
    },
    {
        isExpanded: false,
        menu: 'Item 5',
        submenu: [
            { id: 13, val: 'Sub Cat 13' },
            { id: 15, val: 'Sub Cat 5' },
        ],
    },
    {
        isExpanded: false,
        menu: 'Item 6',
        submenu: [
            { id: 17, val: 'Sub Cat 17' },
            { id: 18, val: 'Sub Cat 8' },
        ],
    },

    ]
};

export default Header;

