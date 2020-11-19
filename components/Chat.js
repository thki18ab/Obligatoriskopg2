//Lavet af Thomas

import React, {Component} from "react";
import {Image, StyleSheet, View} from "react-native";
import Header from "./Header";
import Swiper from "react-native-swiper";

export default class HomeScreen extends Component {

    state={
        email: null
    };

//kalder navigationen i viewet og tilføjer tekst
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Chat'/>
            </View>
        );
    }
}

//styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 15,
        paddingRight:20,
        paddingLeft: 20,
    },
    text2: {
        color: 'black',
        fontSize: 25,
        paddingRight:20,
        paddingLeft: 20,
        alignItems: 'center',
        marginTop: 35,
    },
    wrapper: {
    },
});