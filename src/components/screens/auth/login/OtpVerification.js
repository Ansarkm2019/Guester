import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// pakages
import Modal from 'react-native-modal';

// contents
import {SIZE, mainFonts} from '../../../../constants/constants';

// images
import Logo from '../../../../assets/icons/auth/logo.svg';
import LeftArrow from '../../../../assets/icons/auth/leftarrow.svg';
import GreenTick from '../../../../assets/icons/auth/tickround.svg';
import StartArrow from '../../../../assets/icons/auth/donearrow.svg';

const OtpVerification = ({navigation}) => {
    // state
    const [timer, setTimer] = useState(30);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const OTP = '5454';
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (timer > 0 && isResendDisabled) {
            const countdown = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => {
                clearInterval(countdown);
            };
        } else if (timer === 0) {
            setIsResendDisabled(false);
        }
    }, [timer, isResendDisabled]);

    const handleResendOTP = () => {
        setIsResendDisabled(true);
        setTimer(30);
    };

    const handSubmit = () => {
        if (OTP === otp) {
            console.log(otp, 'otp verifyed');
            setModalVisible(true);
            setError(false);
            setOtp('');
        } else {
            console.log(otp, 'otp not verifyed');
            setOtp('');
            setError(true);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.push('LoginOtp')}
                activeOpacity={0.8}
                style={styles.leftArrow}>
                <LeftArrow width={'100%'} height={'100%'} />
            </TouchableOpacity>
            <View style={styles.logoContain}>
                <Logo width={'100%'} height={'100%'} />
            </View>
            <View style={styles.topContain}>
                <View style={styles.createContain}>
                    <Text allowFontScaling={false} style={styles.createText}>
                        OTP{' '}
                        <Text
                            allowFontScaling={false}
                            style={styles.createTextColor}>
                            Verification
                        </Text>
                    </Text>
                </View>
                <Text allowFontScaling={false} style={styles.signText}>
                    The OTP has been sent to{' '}
                </Text>
                <Text style={styles.signNumber} allowFontScaling={false}>
                    +91 97854 54785.
                </Text>
            </View>
            <View style={styles.bottomContain}>
                <View
                    style={[
                        styles.numberContain,
                        {
                            borderColor: error ? 'red' : '#E3E3E3',
                        },
                    ]}>
                    <TextInput
                        style={styles.number}
                        allowFontScaling={false}
                        placeholder="Enter OTP"
                        keyboardType="numeric"
                        placeholderTextColor={'#929292'}
                        value={otp}
                        onChangeText={number => setOtp(number)}
                    />
                </View>
                {error && (
                    <Text
                        style={{
                            color: 'red',
                        }}>
                        OTP entered is Invalid
                    </Text>
                )}

                <TouchableOpacity
                    onPress={() => {
                        if (otp !== undefined && otp.trim() !== '') {
                            handSubmit();
                        }
                        // setModalVisible(true);
                    }}
                    activeOpacity={0.8}
                    style={styles.verifyButton}>
                    <Text allowFontScaling={false} style={styles.verify}>
                        Signup
                    </Text>
                </TouchableOpacity>
                <View style={styles.already}>
                    <View style={styles.loginContain}>
                        <Text
                            allowFontScaling={false}
                            style={styles.alreadyText}>
                            Don’t recieve code?{' '}
                        </Text>
                        {isResendDisabled ? (
                            <Text style={styles.loginText}>
                                Resend OTP in: {timer}
                            </Text>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleResendOTP}
                                disabled={isResendDisabled}>
                                <Text
                                    allowFontScaling={false}
                                    style={styles.loginText}>
                                    Resend OTP
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
            <Modal
                isVisible={isModalVisible}
                backdropColor="#000000"
                backdropOpacity={0.3}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}>
                <View style={styles.modalContain}>
                    <View style={styles.greenIcon}>
                        <GreenTick width={'100%'} height={'100%'} />
                    </View>
                    <View style={styles.modalMiddle}>
                        <Text style={styles.welcomeText}>Welcome Andrew</Text>
                        <Text style={styles.letText}>
                            Let’s Get{' '}
                            <Text style={styles.startedText}>Started</Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(false);
                            navigation.navigate('MyTabs');
                        }}
                        style={styles.startArrow}>
                        <StartArrow width={'100%'} height={'100%'} />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default OtpVerification;

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
    },
    createText: {
        fontSize: SIZE.wp('7%'),
        lineHeight: SIZE.wp('9%'),
        width: SIZE.wp('62.5%'),
        textAlign: 'center',
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
    signNumber: {
        color: '#222222',
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
        marginTop: SIZE.wp('3.5%'),
    },
    numberContain: {
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZE.wp('90%'),
        paddingHorizontal: SIZE.wp('5%'),
        paddingVertical: SIZE.wp('4%'),
        borderWidth: 2,
        // borderColor: '#E3E3E3',
        borderRadius: SIZE.wp('3%'),
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
    already: {
        marginTop: SIZE.wp('5%'),
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
    // Modal
    modalContain: {
        height: SIZE.wp('95%'),
        width: SIZE.wp('70%'),
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    greenIcon: {
        width: SIZE.wp('25%'),
        height: SIZE.wp('25%'),
    },
    modalMiddle: {
        marginVertical: SIZE.wp('12%'),
    },
    welcomeText: {
        fontSize: SIZE.wp('4.5%'),
        lineHeight: SIZE.wp('5%'),
        color: '#222222',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: SIZE.wp('2%'),
    },
    letText: {
        color: '#232323',
        fontSize: SIZE.wp('6%'),
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: SIZE.wp('7.5%'),
    },
    startedText: {
        color: '#0FBA12',
    },
    startArrow: {
        width: SIZE.wp('15.5%'),
        height: SIZE.wp('15.5%'),
        backgroundColor: '#0FBA12',
        padding: SIZE.wp('5%'),
        borderRadius: 100,
    },
});
