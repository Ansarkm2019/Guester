import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SIZE} from '../../../constants/constants';
import Images from './Images';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// next - right.svg;
import NextIcon from '../../../assets/icons/onBoarding/next-arrow.svg';

const pageStyle = isActive =>
    isActive
        ? styles.page
        : {...styles.page, backgroundColor: 'silver', width: 10};
const Pagination = ({index}) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(DATA_WELCOME.length).keys()].map((_, i) =>
                i === index ? (
                    <View style={pageStyle(true)} key={i} />
                ) : (
                    <View style={pageStyle(false)} key={i} />
                ),
            )}
        </View>
    );
};

const DATA_WELCOME = [
    {
        id: 1,
        imagemain: Images.BIRIYANI,
        title: 'Find the best rated Restaurants near you !',
        imagebottom: Images.LEAVESONE,
    },
    {
        id: 2,
        imagemain: Images.STACK,
        title: 'Explore Food Spots and Home Bakers.',
        imagebottom: Images.LEAVESTWO,
    },
    {
        id: 3,
        imagemain: Images.NOODLES,
        title: 'Fun with Foodies of your local area.',
        imagebottom: Images.LEAVESTHREE,
    },
];

const Item = ({data}) => (
    <View style={styles.itemContainer}>
        <Image
            style={styles.image}
            source={data.imagemain}
            resizeMode="stretch"
        />
        <Text style={styles.titleText}>{data.title}</Text>
        <Image style={styles.bottomImage} source={data.imagebottom} />
    </View>
);

const OnBordingScreen = ({navigation}) => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();
    // console.log(welcomeList, '===ref==');
    const onViewRef = useRef(({changed}) => {
        setWelcomeListIndex(changed[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index:
                welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'white'}
                translucent
            />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={DATA_WELCOME}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode="never"
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    renderItem={({item}) => <Item data={item} />}
                />
            </View>
            <View style={styles.bottomPosition}>
                <Pagination index={welcomeListIndex} />
                {welcomeListIndex === 2 ? (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                        style={styles.startButton}
                        activeOpacity={0.8}>
                        <Text style={styles.startButtonText}>Get Started</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonSkip}
                            activeOpacity={0.8}
                            onPress={() => welcomeList.current.scrollToEnd()}>
                            <Text style={styles.button}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonNext}
                            activeOpacity={0.8}
                            onPress={() => pageScroll()}>
                            {/* <Text style={styles.button}>Next</Text> */}
                            <NextIcon width={'100%'} height={'100%'} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default OnBordingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',

        //
        // borderWidth: 5,
        // borderColor: 'red',
        // width: '100%',
    },
    welcomeListContainer: {
        height: '80%',

        //
        // borderWidth: 5,
        // borderColor: 'green',
    },
    // Item
    itemContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: SIZE.wp('100%'),
        //
        // borderWidth: 5,
        // borderColor: 'yellow',
    },
    image: {
        height: 200,
        width: 200,
        //
        // borderWidth: 5,
        // borderColor: 'gray',
        marginBottom: 100,
    },
    titleText: {
        textAlign: 'center',
        // marginHorizontal: 25,
        fontSize: 18,
        width: '70%',
        //
        // borderWidth: 5,
        // borderColor: 'red',
    },
    bottomImage: {
        height: 150,
        width: '90%',
        // marginHorizontal: 25,
        justifyContent: 'flex-end',
        //
        // borderWidth: 5,
        // borderColor: 'blue',
    },
    // Pagination
    pageContainer: {
        flexDirection: 'row',
        //
        // borderWidth: 5,
        // borderColor: 'red',
    },
    page: {
        height: 8,
        width: 20,
        backgroundColor: 'green',
        borderRadius: 32,
        marginHorizontal: 2,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        //
        // borderWidth: 5,
        // borderColor: 'green',
    },
    buttonSkip: {
        paddingVertical: SIZE.wp('5%'),
        paddingHorizontal: SIZE.wp('4%'),
        borderRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 30,
    },
    buttonNext: {
        paddingVertical: SIZE.wp('5%'),
        paddingHorizontal: SIZE.wp('6%'),
        borderRadius: 100,
        backgroundColor: '#0FBA12',
        width: SIZE.wp('15.5%'),
        height: SIZE.wp('15.5%'),
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 16 * 1.4,
    },
    startButton: {
        backgroundColor: '#0FBA12',
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        marginTop: 20,
    },
    startButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    bottomPosition: {
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        //
        // borderWidth: 5,
        // borderColor: 'gray',
        height: '35%',
    },
});
