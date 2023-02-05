import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, Image, FlatList } from 'react-native';
import React, { Fragment, useState } from 'react';
import { images, icons, SIZES, COLORS, FONTS } from '../constants';


const scrollableTab = (tabList, selectedTab, onPress) => {
    const renderItem = (item) => (
        <TouchableOpacity
            style={{ paddingHorizontal: SIZES.padding * 2, }}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.darkGray, ...FONTS.body2 }}>{item.name}</Text>
            {
                selectedTab.id == item.id &&
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: COLORS.blue }}></View>
                </View>
            }
        </TouchableOpacity>
    );
    return (
        <View style={{ marginTop: SIZES.padding * 2 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const scrollableCard = (navigation, productList) => {

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={{ flex: 1, paddingLeft: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("itemDetails", { "itemInfo": item })}
        >
            <View style={{ height: "100%", width: SIZES.width / 2 }}>
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SIZES.radius * .5,
                    }}
                />
                <View
                    style={{ position: "absolute", top: 15, left: "10%", right: "10%" }}
                >
                    <Text style={{ color: COLORS.lightGray, ...FONTS.body3 }}>Furtinure</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.body2 }}>{item.productName}</Text>
                </View>
                <View
                    style={{
                        position: "absolute",
                        bottom: 30, left: "10%",
                        right: "10%",
                        borderRadius: SIZES.radius * .5,
                        paddingHorizontal: SIZES.padding * 2,
                        paddingVertical: SIZES.base,
                        backgroundColor: COLORS.transparentLightGray
                    }}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h2 }}>$ {item.price.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    return (
        <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => item.productId.toString()}
            />
        </View>
    );
};
const Home = ({ navigation }) => {
    const [tabList, setTabList] = useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })
    const renderHeader = () => (
        <View style={{ marginTop:SIZES.padding*4, paddingHorizontal: SIZES.padding * 2 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity>
                    <Image
                        source={icons.menu}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={icons.cart}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
    const renderTitle = (title) => (
        <View style={{ paddingHorizontal: SIZES.padding * 2 }}>
            <View style={{ marginTop: SIZES.padding * 2, }}>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>Collection Of</Text>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        </View>
    )
    const renderPromotionCard = () => {
        return (
            <View
                style={{ height: "19%", paddingHorizontal:SIZES.padding*2, marginBottom: "5%",justifyContent:"flex-end" }}
            >
                <View
                    style={[styles.shadow, {
                        flexDirection:"row",
                        padding:SIZES.padding2,
                        borderRadius:SIZES.radius*.5,
                        backgroundColor:COLORS.white,
                        height:"80%",
                    }]}
                >
                    <View
                        style={{
                            width:50,
                            height:"100%",
                            justifyContent:"center",
                            alignItems:"center",
                            borderRadius:SIZES.radius*.7,
                            backgroundColor:COLORS.lightGray3,
                        }}
                    >
                        <Image
                            source={images.sofa}
                            resizeMode='cover'
                            style={{
                                width:"60%",
                                height:"60%"
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex:1,
                            marginLeft:SIZES.padding2,
                            justifyContent:"center"
                        }}
                    >
                        <Text style={{color:COLORS.black, ...FONTS.h3}}>Special Offer</Text>
                        <Text style={{color:COLORS.black, ...FONTS.body3}}>adding to your cart</Text>
                    </View>
                    <View
                     style={{
                        alignItems:"center",
                        justifyContent:"center",
                     }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor:COLORS.primary, 
                                height:"70%",
                                justifyContent:"center",
                                alignItems:"center",
                                width:40,
                                borderRadius:SIZES.radius*.5,
                            }}
                            onPress={() => console.warn("clicked")}
                        >
                            <Image
                                source={icons.chevron}
                                resizeMode='contain'
                                style={{
                                    width:"50%",
                                    height:"50%",
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTitle(selectedTab.title)}
            {scrollableTab(tabList, selectedTab, (item) => setSelectedTab(item))}
            {scrollableCard(navigation, selectedTab.productList)}
            {renderPromotionCard()}

        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }

});
