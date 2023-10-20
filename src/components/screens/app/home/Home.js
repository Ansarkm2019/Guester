import {
    Image,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    FlatList,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import React from 'react';

// constants
import {SIZE, mainFonts} from '../../../../constants/constants';
// import Images from './Images';

// Icon & Images
import LocationIcon from '../../../../assets/icons/home/location.svg';
import SearchIcon from '../../../../assets/icons/home/search.svg';
import StarIcon from '../../../../assets/icons/home/star.svg';
import DottIcon from '../../../../assets/icons/home/dott.svg';

import BreakfastIcon from '../../../../assets/icons/home/breakfast.svg';
import LunchIcon from '../../../../assets/icons/home/lunch.svg';
import DinnerIcon from '../../../../assets/icons/home/dinner.svg';
import CoffeTeaIcon from '../../../../assets/icons/home/coffetea.svg';
import FoodSpotIcon from '../../../../assets/icons/home/foodspot.svg';
import HomeBakersIcon from '../../../../assets/icons/home/homebakers.svg';

import Chicking from '../../../../assets/icons/home/chick.svg';
import Like from '../../../../assets/icons/home/like.svg';
import LocationGreenIcon from '../../../../assets/icons/home/locationgreen.svg';
import Kfc from '../../../../assets/icons/home/kfc.svg';

const DATA = [
    {
        id: 1,
        name: 'Rahath restaurant',
        offer: '20%',
        image: require('../../../../assets/images/home/rectangle1.jpg'),
        rate: 4.6,
    },
    {
        id: 2,
        name: 'Fresh sea restaurant',
        offer: '10%',
        image: require('../../../../assets/images/home/rectangle1.jpg'),
        rate: 4.3,
    },
    {
        id: 3,
        name: 'Malabar restaurant',
        offer: '30%',
        image: require('../../../../assets/images/home/rectangle1.jpg'),
        rate: 3.6,
    },
];

const Item = ({item}) => (
    <View style={styles.offerCard}>
        <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={styles.background}>
            <View style={styles.detail}>
                <Text allowFontScaling={false} style={styles.offText}>
                    Upto {item.offer} off
                </Text>
                <View style={styles.detailBottom}>
                    <Text
                        allowFontScaling={false}
                        style={styles.nameRestaurand}>
                        {item.name}
                    </Text>
                    <DottIcon width={15} height={15} />
                    <StarIcon width={20} height={20} />
                    <Text
                        allowFontScaling={false}
                        style={styles.nameRestaurand}>
                        {item.rate}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    </View>
);

const Home = () => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <StatusBar backgroundColor={'#133149'} />
            <View style={styles.header}>
                <View style={styles.leftHead}>
                    <View style={styles.logoContain}>
                        <Image
                            source={require('../../../../assets/images/home/textlogo.png')}
                        />
                    </View>
                </View>
                <View style={styles.rigthtHead}>
                    <View style={styles.locationIcon}>
                        <LocationIcon width={'100%'} height={'100%'} />
                    </View>
                    <Text allowFontScaling={false} style={styles.locationText}>
                        Irinjalakkuda
                    </Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainContaner}>
                    <View style={styles.topContain}>
                        <Text allowFontScaling={false} style={styles.hiName}>
                            Hi Andrew
                        </Text>
                        <Text allowFontScaling={false} style={styles.near}>
                            Find the best rated{' '}
                            <Text
                                allowFontScaling={false}
                                style={styles.restaurant}>
                                Restaurants
                            </Text>{' '}
                            near you !
                        </Text>
                        <View style={styles.searchContainer}>
                            <View style={styles.search}>
                                <SearchIcon width={'100%'} height={'100%'} />
                            </View>
                            <TextInput
                                placeholder="Search"
                                allowFontScaling={false}
                            />
                        </View>
                    </View>
                    <View style={styles.offListContain}>
                        <FlatList
                            data={DATA}
                            renderItem={Item}
                            keyExtractor={item => item.id}
                            horizontal
                            overScrollMode="never"
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.foodTypes}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.foodItem}>
                            <View style={styles.foodIcon}>
                                <BreakfastIcon width={30} height={30} />
                            </View>
                            <Text
                                allowFontScaling={false}
                                style={styles.foodText}>
                                Breakfast
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.foodItem}>
                            <View style={styles.foodIcon}>
                                <LunchIcon width={30} height={30} />
                            </View>
                            <Text
                                allowFontScaling={false}
                                style={styles.foodText}>
                                Lunch
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={[styles.foodItem, {marginRight: 0}]}>
                            <View style={styles.foodIcon}>
                                <DinnerIcon width={30} height={30} />
                            </View>
                            <Text
                                allowFontScaling={false}
                                style={styles.foodText}>
                                Dinner
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.foodItem}>
                            <View style={styles.foodIcon}>
                                <CoffeTeaIcon width={30} height={30} />
                            </View>
                            <Text
                                allowFontScaling={false}
                                style={styles.foodText}>
                                Coffee & Tea
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.foodItem}>
                            <View style={styles.foodIcon}>
                                <FoodSpotIcon width={30} height={30} />
                            </View>
                            <Text
                                allowFontScaling={false}
                                style={styles.foodText}>
                                Food Spot
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={[styles.foodItem, {marginRight: 0}]}>
                            <View style={styles.foodIcon}>
                                <HomeBakersIcon width={30} height={30} />
                            </View>
                            <Text
                                allowFontScaling={false}
                                style={styles.foodText}>
                                Home Bakers
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nearContainer}>
                        <View style={styles.nearHead}>
                            <Text style={styles.nearText}>
                                Nearby Restaurants
                            </Text>
                            <TouchableOpacity style={styles.nearAll}>
                                <Text style={styles.nearAllText}>
                                    Explore All
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.backImage}>
                            <ImageBackground
                                source={require('../../../../assets/images/home/chick.png')}
                                resizeMode="cover"
                                style={styles.backgroundImage}>
                                <View style={styles.topIcons}>
                                    <View style={styles.chickingIcon}>
                                        <Chicking
                                            width={'100%'}
                                            height={'100%'}
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.likeIcon}>
                                        <Like width={'100%'} height={'100%'} />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <View style={styles.bottomNear}>
                                <View style={styles.spotContain}>
                                    <Text>Spot Name</Text>
                                    <Text>1.6 km</Text>
                                </View>
                                <View style={styles.placeContain}>
                                    <View>
                                        <LocationGreenIcon
                                            width={20}
                                            height={20}
                                        />
                                    </View>
                                    <Text>Irinjalakkuda</Text>
                                </View>
                                <View style={styles.lastItems}>
                                    <View style={styles.lastItemsLeft}>
                                        <View>
                                            <StarIcon width={20} height={20} />
                                        </View>
                                        <Text>4.5 | 32 Reviews</Text>
                                        <View></View>
                                        <Text>200Rs for 2</Text>
                                    </View>
                                    <TouchableOpacity style={styles.explore}>
                                        <Text>Explore</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.exploreNear}>
                            <Text style={styles.exploreNearText}>
                                Explore All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.brandContain}>
                        <View style={styles.nearHead}>
                            <Text style={styles.nearText}>Top Brands</Text>
                            <TouchableOpacity style={styles.nearAll}>
                                <Text style={styles.nearAllText}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={styles.brandImageContain}>
                                <ImageBackground
                                    source={require('../../../../assets/images/home/kfc.png')}
                                    resizeMode="cover"
                                    style={styles.brandImage}>
                                    <View>
                                        <View style={styles.brandIcon}>
                                            <Kfc width={60} height={60} />
                                        </View>
                                        <Text style={styles.brandOff}>
                                            30% off
                                        </Text>
                                        <Text style={styles.brandName}>
                                            on KFC
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.brandImageContain}>
                                <ImageBackground
                                    source={require('../../../../assets/images/home/kfc.png')}
                                    resizeMode="cover"
                                    style={styles.brandImage}>
                                    <View>
                                        <View style={styles.brandIcon}>
                                            <Kfc width={60} height={60} />
                                        </View>
                                        <Text style={styles.brandOff}>
                                            30% off
                                        </Text>
                                        <Text style={styles.brandName}>
                                            on KFC
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.brandImageContain}>
                                <ImageBackground
                                    source={require('../../../../assets/images/home/kfc.png')}
                                    resizeMode="cover"
                                    style={styles.brandImage}>
                                    <View>
                                        <View style={styles.brandIcon}>
                                            <Kfc width={60} height={60} />
                                        </View>
                                        <Text style={styles.brandOff}>
                                            30% off
                                        </Text>
                                        <Text style={styles.brandName}>
                                            on KFC
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        // paddingHorizontal: SIZE.wp('5%'),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#133149',
        paddingHorizontal: SIZE.wp('5%'),
        paddingVertical: SIZE.wp('3%'),
    },
    leftHead: {
        backgroundColor: '#133149',
        paddingHorizontal: SIZE.wp('2.5%'),
        paddingVertical: SIZE.wp('2%'),
        borderRadius: 10,
    },
    logoContain: {},
    rigthtHead: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        width: SIZE.wp('5%'),
        height: SIZE.wp('5%'),
    },
    locationText: {
        marginLeft: SIZE.wp('1%'),
        color: '#FBFBFB',
        fontSize: SIZE.wp('4%'),
        lineHeight: SIZE.wp('5%'),
        letterSpacing: 0.5,
        ...Platform.select({
            android: {
                fontFamily: 'regular',
            },
            ios: {
                fontFamily: mainFonts.dmRegular,
                fontWeight: '400',
            },
        }),
    },
    mainContaner: {
        paddingHorizontal: SIZE.wp('5%'),
        // paddingVertical: SIZE.wp('40%'),
        paddingVertical: SIZE.wp('7%'),
    },
    topContain: {},
    hiName: {
        color: '#A0A0A0',
        marginBottom: SIZE.wp('2%'),
        fontSize: SIZE.wp('4.5%'),
        lineHeight: SIZE.wp('4%'),
        letterSpacing: 0.5,
        ...Platform.select({
            android: {
                fontFamily: 'regular',
            },
            ios: {
                fontFamily: mainFonts.dmRegular,
                fontWeight: '400',
            },
        }),
    },
    near: {
        color: '#133149',
        width: SIZE.wp('70%'),
        fontSize: SIZE.wp('6.5%'),
        lineHeight: SIZE.wp('7.5'),
        ...Platform.select({
            android: {
                fontFamily: 'bold',
            },
            ios: {
                fontFamily: mainFonts.dmBold,
                fontWeight: '700',
            },
        }),
    },
    restaurant: {
        color: '#0FBA12',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F5',
        paddingHorizontal: SIZE.wp('4'),
        borderRadius: 100,
        marginTop: SIZE.wp('6%'),
    },
    search: {
        width: SIZE.wp('6%'),
        height: SIZE.wp('6%'),
        marginRight: SIZE.wp('1%'),
    },
    offListContain: {
        width: SIZE.wp('97%'),
        marginTop: SIZE.wp('6%'),
        borderRadius: 50,
    },
    offerCard: {
        height: SIZE.wp('38%'),
        width: SIZE.wp('65%'),
        marginRight: SIZE.wp('2%'),
    },
    background: {
        flex: 1,
        borderRadius: 100,
    },
    detail: {
        position: 'absolute',
        left: 15,
        bottom: 15,
    },
    offText: {
        color: '#fff',
        fontSize: SIZE.wp('6%'),
        lineHeight: SIZE.wp('8'),
        ...Platform.select({
            android: {
                fontFamily: 'medium',
            },
            ios: {
                fontFamily: mainFonts.dmMedium,
                fontWeight: '500',
            },
        }),
    },
    detailBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameRestaurand: {
        color: '#fff',
        fontSize: SIZE.wp('4%'),
        lineHeight: SIZE.wp('5'),
        ...Platform.select({
            android: {
                fontFamily: 'regular',
            },
            ios: {
                fontFamily: mainFonts.dmRegular,
                fontWeight: '400',
            },
        }),
    },
    foodTypes: {
        marginTop: SIZE.wp('6%'),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    foodItem: {
        backgroundColor: '#F3F4F5',
        alignItems: 'center',
        paddingVertical: SIZE.wp('5%'),
        borderRadius: 20,
        marginRight: SIZE.wp('3%'),
        marginBottom: SIZE.wp('3%'),
        width: '30%',
    },
    foodIcon: {},
    foodText: {
        marginTop: SIZE.wp('2%'),
        fontSize: SIZE.wp('3%'),
        lineHeight: SIZE.wp('4%'),
        ...Platform.select({
            android: {
                fontFamily: 'medium',
            },
            ios: {
                fontFamily: mainFonts.dmMedium,
                fontWeight: '500',
            },
        }),
    },
    nearContainer: {},
    nearHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZE.wp('4%'),
    },
    nearText: {
        color: '#133149',
        fontSize: SIZE.wp('5.5%'),
        lineHeight: SIZE.wp('7%'),
        ...Platform.select({
            android: {
                fontFamily: 'medium',
            },
            ios: {
                fontFamily: mainFonts.dmMedium,
                fontWeight: '500',
            },
        }),
    },
    nearAll: {},
    nearAllText: {
        color: '#0FBA12',
        textDecorationLine: 'underline',
    },
    backImage: {
        height: SIZE.wp('38%'),
        width: '100%',
        // borderRadius: 60,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    backgroundImage: {
        // height: SIZE.wp('40.5%'),
        flex: 1,
        borderRadius: 100,
    },
    topIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chickingIcon: {
        height: SIZE.wp('30%'),
        width: SIZE.wp('30%'),
    },
    likeIcon: {
        height: SIZE.wp('8%'),
        width: SIZE.wp('8%'),
    },
    bottomNear: {
        backgroundColor: '#fff',
        height: SIZE.wp('30%'),
        borderRadius: 20,
        position: 'absolute',
        bottom: -70,
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    spotContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    placeContain: {
        flexDirection: 'row',
    },
    lastItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastItemsLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    explore: {
        padding: 10,
        backgroundColor: '#C4FACA',
        borderRadius: 10,
    },
    exploreNear: {
        marginTop: SIZE.wp('25%'),
        borderWidth: 2,
        borderColor: '#0FBA12',
        alignItems: 'center',
        paddingVertical: SIZE.wp('3%'),
        borderRadius: 10,
    },
    exploreNearText: {
        color: '#222222',
        fontSize: SIZE.wp('3.5%'),
        lineHeight: SIZE.wp('5%'),
        ...Platform.select({
            android: {
                fontFamily: 'medium',
            },
            ios: {
                fontFamily: mainFonts.dmMedium,
                fontWeight: '500',
            },
        }),
    },
    brandContain: {
        marginTop: SIZE.wp('5%'),
    },
    brandImageContain: {
        width: SIZE.wp('37%'),
        height: SIZE.wp('46.5%'),
        marginRight: SIZE.wp('2%'),
    },
    brandImage: {
        // width: SIZE.wp('37%'),
        // width: SIZE.wp('46.5%'),
        flex: 1,
        justifyContent: 'flex-end',
        padding: 15,
    },
    brandIcon: {
        // height: SIZE.wp('10%'),
        // width: SIZE.wp('10%'),
    },
    brandOff: {
        color: '#FFFFFF',
        fontSize: SIZE.wp('5.5%'),
        lineHeight: SIZE.wp('7%'),
        ...Platform.select({
            android: {
                fontFamily: 'medium',
            },
            ios: {
                fontFamily: mainFonts.dmMedium,
                fontWeight: '500',
            },
        }),
    },
    brandName: {
        color: '#FFFFFF',
        fontSize: SIZE.wp('3%'),
        lineHeight: SIZE.wp('4%'),
        ...Platform.select({
            android: {
                fontFamily: 'regular',
            },
            ios: {
                fontFamily: mainFonts.dmRegular,
                fontWeight: '400',
            },
        }),
    },
});
