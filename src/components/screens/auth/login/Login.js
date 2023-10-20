import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, {useState} from 'react';

// contents
import {SIZE, mainFonts} from '../../../../constants/constants';

// images
import Logo from '../../../../assets/icons/auth/logo.svg';
import Apple from '../../../../assets/icons/auth/bi_apple.svg';
import Google from '../../../../assets/icons/auth/google.svg';
import Meta from '../../../../assets/icons/auth/bi_meta.svg';
import Password from '../../../../assets/icons/auth/password.svg';
import Passwordopen from '../../../../assets/icons/auth/passwordopen.svg';
const Login = ({navigation}) => {
    // state
    const [phone, setPhone] = useState('');
    // console.log(phone);
    const [hide, setHide] = useState(true);

    const handSubmit = () => {
        console.log(phone);
        setPhone('');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoContain}>
                    <Logo width={'100%'} height={'100%'} />
                </View>
                <View style={styles.topContain}>
                    <View style={styles.createContain}>
                        <Text
                            allowFontScaling={false}
                            style={styles.createText}>
                            Login{' '}
                            <Text
                                allowFontScaling={false}
                                style={styles.createTextColor}>
                                to your Account
                            </Text>
                        </Text>
                    </View>
                    <Text allowFontScaling={false} style={styles.signText}>
                        Welcome again, Login to your account have fun with
                        foodies.
                    </Text>
                </View>
                <View style={styles.bottomContain}>
                    <View style={styles.numberContain}>
                        <TextInput
                            style={styles.number}
                            allowFontScaling={false}
                            placeholder="+91 Phone Number"
                            keyboardType="numeric"
                            placeholderTextColor={'#929292'}
                            value={phone}
                            onChangeText={number => setPhone(number)}
                        />
                    </View>
                    <View style={styles.numberContain}>
                        <TextInput
                            style={styles.number}
                            allowFontScaling={false}
                            placeholder="Password"
                            placeholderTextColor={'#929292'}
                            secureTextEntry={hide ? true : false}
                            // value={phone}
                            // onChangeText={number => setPhone(number)}
                        />
                        <TouchableOpacity
                            style={styles.passwordIcon}
                            onPress={() => {
                                setHide(!hide);
                            }}>
                            {hide ? (
                                <Password width={'100%'} height={'100%'} />
                            ) : (
                                <Passwordopen width={'100%'} height={'100%'} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.forget}
                        onPress={() => {
                            navigation.navigate('OtpPasswordVerify');
                        }}>
                        <Text style={styles.forgetText}>Forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if (phone !== undefined && phone.trim() !== '') {
                                handSubmit();
                            }
                        }}
                        activeOpacity={0.8}
                        style={styles.verifyButton}>
                        <Text allowFontScaling={false} style={styles.verify}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('LoginOtp');
                        }}
                        activeOpacity={0.8}
                        style={styles.withOtpButton}>
                        <Text
                            allowFontScaling={false}
                            style={styles.withOtpText}>
                            Login with OTP
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.already}>
                        <View style={styles.logosContain}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.logos}>
                                <Meta width={'100%'} height={'100%'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.logos}>
                                <Google width={'100%'} height={'100%'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.logos}>
                                <Apple width={'100%'} height={'100%'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.loginContain}>
                            <Text
                                allowFontScaling={false}
                                style={styles.alreadyText}>
                                Don’t have an account{' '}
                            </Text>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text
                                    allowFontScaling={false}
                                    style={styles.loginText}>
                                    Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: SIZE.wp('10%'),
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
        width: SIZE.wp('56%'),
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
        marginBottom: 50,
    },
    numberContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SIZE.wp('90%'),
        paddingHorizontal: SIZE.wp('4%'),
        paddingVertical: SIZE.wp('3%'),
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: SIZE.wp('3%'),
        marginBottom: SIZE.wp('4%'),
    },
    // numberCode: {
    //     marginRight: SIZE.wp('3%'),
    //     width: '10%',
    //     color: '#242424',
    //     lineHeight: SIZE.wp('5%'),
    //     fontSize: SIZE.wp('4%'),
    //     letterSpacing: 0.5,
    //     ...Platform.select({
    //         android: {
    //             fontFamily: 'regular',
    //         },
    //         ios: {
    //             fontFamily: mainFonts.dmRegular,
    //             fontWeight: '400',
    //         },
    //     }),
    // },
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
    forget: {
        alignSelf: 'flex-end',
    },
    forgetText: {
        letterSpacing: 0.1,
        color: '#0FBA12',
        lineHeight: SIZE.wp('5%'),
        fontSize: SIZE.wp('4%'),
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
    passwordIcon: {
        width: SIZE.wp('6%'),
        height: SIZE.wp('6%'),
        // borderWidth: 1,
        // borderColor: 'red',
    },
    verifyButton: {
        backgroundColor: '#0FBA12',
        paddingVertical: SIZE.wp('4%'),
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
    withOtpButton: {
        paddingVertical: SIZE.wp('4%'),
        alignItems: 'center',
        borderRadius: SIZE.wp('3%'),
        marginTop: SIZE.wp('4%'),
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#0FBA12',
    },
    withOtpText: {
        color: '#222222',
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
    logosContain: {
        marginVertical: SIZE.wp('5%'),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: SIZE.wp('48%'),
    },
    logos: {
        height: SIZE.wp('13%'),
        width: SIZE.wp('13%'),
        borderRadius: 100,
        borderColor: '#EFEFEF',
        borderWidth: 1,
        padding: SIZE.wp('3%'),
    },
    loginContain: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
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
