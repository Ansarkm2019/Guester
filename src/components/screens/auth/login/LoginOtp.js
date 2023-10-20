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

const LoginOtp = ({navigation}) => {
    // state
    const [phone, setPhone] = useState('');
    // console.log(phone);

    const handSubmit = () => {
        console.log(phone);
        setPhone('');
        navigation.navigate('OtpVerification');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContain}>
                <Logo width={'100%'} height={'100%'} />
            </View>
            <View style={styles.topContain}>
                <View style={styles.createContain}>
                    <Text allowFontScaling={false} style={styles.createText}>
                        Login{' '}
                        <Text
                            allowFontScaling={false}
                            style={styles.createTextColor}>
                            with OTP
                        </Text>
                    </Text>
                </View>
                <Text allowFontScaling={false} style={styles.signText}>
                    We'll send a four-digit OTP to this phone number.
                </Text>
            </View>
            <View style={styles.bottomContain}>
                <View style={styles.numberContain}>
                    <Text allowFontScaling={false} style={styles.numberCode}>
                        +91
                    </Text>
                    <TextInput
                        style={styles.number}
                        allowFontScaling={false}
                        placeholder="Phone Number"
                        keyboardType="numeric"
                        placeholderTextColor={'#929292'}
                        value={phone}
                        onChangeText={number => setPhone(number)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (phone !== undefined && phone.trim() !== '') {
                            handSubmit();
                        }
                    }}
                    activeOpacity={0.8}
                    style={styles.verifyButton}>
                    <Text allowFontScaling={false} style={styles.verify}>
                        Get OTP
                    </Text>
                </TouchableOpacity>
                <View style={styles.already}>
                    <View style={styles.loginContain}>
                        <Text
                            allowFontScaling={false}
                            style={styles.alreadyText}>
                            Already have an account{' '}
                        </Text>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text
                                allowFontScaling={false}
                                style={styles.loginText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LoginOtp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: SIZE.wp('5.5%'),
        backgroundColor: '#fff',
        paddingHorizontal: SIZE.wp('5%'),
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
    },
    createText: {
        fontSize: SIZE.wp('7%'),
        lineHeight: SIZE.wp('9%'),
        color: '#0FBA12',
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
        color: '#242424',
    },
    signText: {
        color: '#A0A0A0',
        width: SIZE.wp('53%'),
        fontSize: SIZE.wp('3.5%'),
        lineHeight: SIZE.wp('5%'),
        textAlign: 'center',
        letterSpacing: 0.25,
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
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: SIZE.wp('3%'),
    },
    numberCode: {
        marginRight: SIZE.wp('3%'),
        width: '10%',
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
    number: {
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
    verifyButton: {
        backgroundColor: '#0FBA12',
        paddingVertical: SIZE.wp('5%'),
        alignItems: 'center',
        borderRadius: SIZE.wp('3%'),
        marginTop: SIZE.wp('4%'),
    },
    verify: {
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
    already: {},
    loginContain: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: SIZE.wp('5%'),
    },
    alreadyText: {
        color: '#A0A0A0',
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
    loginText: {
        color: '#0FBA12',
        lineHeight: SIZE.wp('4%'),
        fontSize: SIZE.wp('4%'),
        letterSpacing: 0.5,
        textDecorationLine: 'underline',
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
