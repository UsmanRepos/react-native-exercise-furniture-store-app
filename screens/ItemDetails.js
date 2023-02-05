import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SIZES, COLORS, icons, images, FONTS } from '../constants';

const ItemDetails = ({ navigation, route }) => {
    let { itemInfo } = route.params;

    const renderHeader = () => {
        return (
            <View style={{marginTop:SIZES.padding*4, paddingHorizontal: SIZES.padding * 2 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Image
                            source={icons.menu}
                            resizeMode='contain'
                            style={{
                                tintColor: COLORS.white,
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                                tintColor: COLORS.white,
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const renderProductTag = () => {
        return (
            <>
                <View
                    style={{
                        position: "absolute",
                        top: "45%",
                        left: "15%",
                        width: 40,
                        height: 40,
                        backgroundColor: COLORS.transparentLightGray1,
                        borderRadius: 999,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: 10,
                            height: 10,
                            backgroundColor: COLORS.blue,
                            borderRadius: 999,
                        }}
                    >

                    </View>
                </View>
                <View
                    style={{
                        position: "absolute",
                        top: "43%",
                        left: "30%",
                        width: "60%",
                        flexDirection: "row",
                        padding:SIZES.padding*1.5,
                        backgroundColor: COLORS.transparentLightGray1,
                        borderRadius: SIZES.radius * .5,
                    }}
                >
                    <View style={{flex:2}}>
                        <Text style={{color:COLORS.darkGray, ...FONTS.h4}}>{itemInfo.productName}</Text>
                    </View>
                    <View style={{flex:1.5, alignItems:"flex-end", justifyContent:"flex-end"}}>
                        <Text style={{color:COLORS.darkGreen, ...FONTS.h4}}>$ {itemInfo.price.toFixed(2)}</Text>
                    </View>
                </View>
                <View
                    style={{
                        position:"absolute",
                        bottom:"20%",
                        left:SIZES.padding*2,
                        right:SIZES.padding*2,
                    }}
                >
                    <Text style={{color:COLORS.lightGray, ...FONTS.body3}}>Furtinure</Text>
                    <Text style={{color:COLORS.white, marginTop:SIZES.base, ...FONTS.h1}}>{itemInfo.productName}</Text>
                </View>
            </>
        )
    }
    const renderInfo = () => {
        if (itemInfo) {
            return (
                <ImageBackground
                    source={itemInfo.image}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {renderHeader()}
                    {renderProductTag()}
                </ImageBackground>
            );
        } else {
            <View>

            </View>
        }
    }
    const renderFooter = () => {
        return (
            <View 
                style={{
                    position:"absolute",
                    bottom:"5%",
                    left:SIZES.padding*2,
                    right:SIZES.padding*2,
                    height:70,
                    flexDirection:"row",
                    backgroundColor:COLORS.white,
                    borderRadius:SIZES.radius*.5,
                }}
            >
                <View style={{flex:2, justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image 
                            source={icons.dashboard}
                            resizeMode='contain'
                            style={{
                                tintColor:COLORS.gray,
                                width:25,
                                height:25,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity
                        style={{
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:COLORS.primary,
                            width:50,
                            height:50,
                            borderRadius:SIZES.radius*.5,
                        }}
                        onPress={() => console.warn("add button clicked")}
                    >
                        <Image 
                         source={icons.plus}
                         resizeMode='contain'
                         style={{
                             tintColor:COLORS.white,
                             width:20,
                             height:20,
                         }}
                        />

                    </TouchableOpacity>
                </View>
                <View style={{flex:2, justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity
                        onPress={() => console.warn("user profile clicked")}
                    >
                        <Image 
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                                tintColor:COLORS.gray,
                                width:25,
                                height:25,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderInfo()}
            {renderFooter()}
        </View>
    );
};

export default ItemDetails;

const styles = StyleSheet.create({});
