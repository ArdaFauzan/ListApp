import React, { Component } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";


class Detail extends Component{
    render() {
        return(
            <View style={{flex: 1}}>
                <Image 
                    source={this.props.route.params.image}
                    style={{
                        width: '100%', 
                        height: '35%',
                    }}
                />
                    <Text 
                        style={{
                        fontSize: 45,
                        marginTop: 14,
                        marginLeft: 14,
                        fontWeight: 'bold',
                        color: '#000000',
                    }}>{this.props.route.params.plantName}</Text>
                    <Text
                        style={{
                        fontSize: 24,
                        marginLeft: 14,
                        fontWeight: '700',
                        color: '#000000',    
                    }}>{this.props.route.params.latinName}</Text>
                    <Text
                        style={{
                        fontSize: 20,
                        color: '#000000',
                        marginLeft: 14,
                        marginTop: 10,
                        fontWeight: '700',
                    }}>Description :</Text>
                    <ScrollView>
                        <Text
                            style={{
                            fontSize: 12,
                            marginLeft: 14,
                            fontWeight: '700',
                            color: '#000000', 
                        }}>{this.props.route.params.plantDesc}</Text>
                    </ScrollView>
                <View style={{backgroundColor: 'green'}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{
                                flex: 1, 
                                justifyContent: 'center', 
                                alignItems: 'center',
                            }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image 
                                source={require('../assets/home.png')} 
                                style={{
                                    marginTop: 9, 
                                    height: 55, 
                                    width: 50,
                                    }}/>
                            <Text style={{
                                color: '#ffffff', 
                                fontSize: 18, 
                                fontWeight: 'bold',
                                }}>HOME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{
                                flex: 1, 
                                justifyContent: 'center', 
                                alignItems: 'center',
                            }}
                            onPress={() => this.props.navigation.navigate('Profile')}
                            >
                            <Image 
                                source={require('../assets/profile.png')} 
                                style={{
                                    height: 55, 
                                    width: 55,
                                    marginTop: 10,
                                    }}/>
                            <Text style={{
                                color: '#ffffff', 
                                fontSize: 18, 
                                fontWeight: 'bold',
                                }}>PROFILE</Text>
                        </TouchableOpacity>
                    </View>
                </View>    
            </View>
        )
    }
}

export default Detail;