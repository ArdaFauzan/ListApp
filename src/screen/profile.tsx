import React, { Component } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

class Profile extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, position: 'relative', bottom: 10}}>
                    <Image 
                        source={require('../assets/foto.jpeg')}
                        style={{
                            width: 160, 
                            height: 160,
                            borderRadius: 160/2,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                    />

                    <Text
                        style={{
                            fontSize: 20,
                            color: '#000000',
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginVertical: 12,
                        }}
                    >
                    Muhammad 'Arda Rizqy Fauzan</Text>
                    
                    <View 
                        style={{
                            backgroundColor: '#B5C4B3', 
                            borderColor: '#28B405',
                            borderWidth: 2.5,
                            marginHorizontal: 12,
                            marginVertical: 10,
                            borderRadius: 20,
                            padding: 15,
                            flexDirection: 'row',
                            }}>
                        <Image 
                            source={require('../assets/email.png')}
                            style={{
                                height: 50, 
                                width: 50,
                            }}    
                        ></Image>
                        <Text
                            style={{
                                fontSize: 14, 
                                fontWeight: 'bold', 
                                color: '#000000',
                                marginLeft: 5,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginBottom: 8,
                            }}
                        >ardarizqyfauzan0301@gmail.com</Text>
                    </View>

                    <View 
                        style={{
                            backgroundColor: '#B5C4B3', 
                            borderColor: '#28B405',
                            borderWidth: 2.5,
                            marginHorizontal: 12,
                            marginVertical: 10,
                            borderRadius: 20,
                            padding: 15,
                            flexDirection: 'row',
                            }}>
                        <Image 
                            source={require('../assets/phone.png')}
                            style={{
                                height: 50, 
                                width: 50,
                            }}    
                        ></Image>
                        <Text
                            style={{
                                fontSize: 14, 
                                fontWeight: 'bold', 
                                color: '#000000',
                                marginLeft: 5,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginBottom: 8,
                            }}
                        >+62812-9188-9583</Text>
                    </View>

                    <View 
                        style={{
                            backgroundColor: '#B5C4B3', 
                            borderColor: '#28B405',
                            borderWidth: 2.5,
                            marginHorizontal: 12,
                            marginVertical: 10,
                            borderRadius: 20,
                            padding: 15,
                            flexDirection: 'row',
                            }}>
                        <Image 
                            source={require('../assets/github.png')}
                            style={{
                                height: 50, 
                                width: 50,
                            }}    
                        ></Image>
                        <Text
                            style={{
                                fontSize: 16, 
                                fontWeight: 'bold', 
                                color: '#000000',
                                marginLeft: 5,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginBottom: 6,
                            }}
                        >ArdaFauzan</Text>
                    </View>

                    <View 
                        style={{
                            backgroundColor: '#B5C4B3', 
                            borderColor: '#28B405',
                            borderWidth: 2.5,
                            marginHorizontal: 12,
                            marginVertical: 10,
                            borderRadius: 20,
                            padding: 15,
                            flexDirection: 'row',
                            }}>
                        <Image 
                            source={require('../assets/linkedin.png')}
                            style={{
                                height: 50, 
                                width: 50,
                            }}    
                        ></Image>
                        <Text
                            style={{
                                fontSize: 16, 
                                fontWeight: 'bold', 
                                color: '#000000',
                                marginLeft: 5,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginBottom: 5,
                            }}
                        >M. 'Arda Rizqy Fauzan</Text>
                    </View>
                </View>

                <View style={{backgroundColor: 'green'}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{
                                flex: 1, 
                                justifyContent: 'center', 
                                alignItems: 'center',
                            }}
                            onPress={() => this.props.navigation.navigate('Home')}
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

export default Profile;