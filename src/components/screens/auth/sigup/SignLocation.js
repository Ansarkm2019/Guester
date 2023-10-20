import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

// contents
import {SIZE, mainFonts} from '../../../../constants/constants';

// images
import Logo from '../../../../assets/icons/auth/logo.svg';
import LeftArrow from '../../../../assets/icons/auth/leftarrow.svg';
import Locationlight from '../../../../assets/icons/auth/locationwireframe.svg';
import Corrent from '../../../../assets/icons/auth/locationcorrent.svg';

// packages
import GetLocation from 'react-native-get-location';

const SignLocation = ({navigation}) => {
    // state
    const [place, setPlace] = useState('');
    // console.log(place);

    const handSubmit = () => {
        console.log(place);
        setPlace('');
    };

    const findLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
            .then(location => {
                console.log(location);
            })
            .catch(error => {
                const {code, message} = error;
                console.warn(code, message);
            });
    };

    // componentDidMount();
    // {
    //     if (hasLocationPermission) {
    //         Geolocation.getCurrentPosition(
    //             position => {
    //                 console.log(position);
    //             },
    //             error => {
    //                 // See error code charts below.
    //                 console.log(error.code, error.message);
    //             },
    //             {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    //         );
    //     }
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.leftArrow}>
                <LeftArrow width={'100%'} height={'100%'} />
            </TouchableOpacity>
            <View style={styles.logoContain}>
                <Logo width={'100%'} height={'100%'} />
            </View>
            <View style={styles.topContain}>
                <View style={styles.createContain}>
                    <Text allowFontScaling={false} style={styles.createText}>
                        Add your{' '}
                        <Text
                            allowFontScaling={false}
                            style={styles.createTextColor}>
                            Location
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContain}>
                <View style={styles.numberContain}>
                    <View style={styles.location}>
                        <Locationlight width={'100%'} height={'100%'} />
                    </View>
                    <TextInput
                        style={styles.name}
                        allowFontScaling={false}
                        placeholder="Enter Location"
                        placeholderTextColor={'#929292'}
                        value={place}
                        onChangeText={text => setPlace(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={findLocation()}
                    style={styles.correntLocationContain}>
                    <View style={styles.correntLocationIcon}>
                        <Corrent width={'100%'} height={'100%'} />
                    </View>
                    <Text style={styles.correntText} allowFontScaling={false}>
                        Use current Location
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if (place !== undefined && place.trim() !== '') {
                            handSubmit();
                            navigation.navigate('OnBordingScreen');
                        }
                    }}
                    activeOpacity={0.8}
                    style={styles.verifyButton}>
                    <Text allowFontScaling={false} style={styles.nextText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: SIZE.wp('5.5%'),
        backgroundColor: '#fff',
        paddingHorizontal: SIZE.wp('5%'),
    },
    leftArrow: {
        height: SIZE.wp('11%'),
        width: SIZE.wp('11%'),
        borderRadius: 100,
        padding: SIZE.wp('2.5%'),
        backgroundColor: '#fff',
        borderColor: '#E3E3E3',
        borderWidth: 1,
        alignSelf: 'flex-start',
    },
    logoContain: {
        height: SIZE.wp('22%'),
        width: SIZE.wp('22%'),
        borderRadius: 100,
        padding: SIZE.wp('5%'),
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
    topContain: {
        marginTop: SIZE.wp('12.5%'),
        alignItems: 'center',
    },
    createContain: {
        marginBottom: SIZE.wp('4.5%'),
        alignItems: 'center',
        width: SIZE.wp('60.5%'),
    },
    createText: {
        textAlign: 'center',
        fontSize: SIZE.wp('7%'),
        lineHeight: SIZE.wp('9%'),
        color: '#242424',

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
    createTextColor: {
        color: '#0FBA12',
    },
    bottomContain: {
        width: SIZE.wp('90%'),
        marginTop: SIZE.wp('12.5%'),
    },
    numberContain: {
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZE.wp('90%'),
        paddingHorizontal: SIZE.wp('5%'),
        paddingVertical: SIZE.wp('4%'),
        borderWidth: 2,
        borderColor: '#0FBA12',
        borderRadius: SIZE.wp('3%'),
        marginBottom: SIZE.wp('4%'),
    },
    location: {
        width: SIZE.wp('6%'),
        height: SIZE.wp('6%'),
        marginRight: SIZE.wp('2%'),
    },
    name: {
        padding: 0,
        width: '85%',
        color: '#242424',
        lineHeight: SIZE.wp('5%'),
        fontSize: SIZE.wp('4%'),
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
    correntLocationContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    correntLocationIcon: {
        width: SIZE.wp('6%'),
        height: SIZE.wp('6%'),
        marginRight: SIZE.wp('3%'),
    },
    verifyButton: {
        backgroundColor: '#0FBA12',
        paddingVertical: SIZE.wp('5%'),
        alignItems: 'center',
        borderRadius: SIZE.wp('3%'),
        marginTop: SIZE.wp('8%'),
    },
    nextText: {
        color: '#FFF',
        fontSize: SIZE.wp('4.5%'),
        lineHeight: SIZE.wp('4.5%'),
        letterSpacing: 0.1,
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
});
