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
import LeftArrow from '../../../../assets/icons/auth/leftarrow.svg';

import Password from '../../../../assets/icons/auth/password.svg';
import Passwordopen from '../../../../assets/icons/auth/passwordopen.svg';
const ResetPassword = ({navigation}) => {
    // state
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // console.log(phone);
    const [hide, setHide] = useState(true);
    const [reHide, setReHide] = useState(true);

    // const handSubmit = () => {
    //     console.log(phone);
    //     setPhone('');
    // };
    const handleResetPassword = () => {
        if (newPassword === confirmPassword) {
            // Passwords match, proceed with the password reset logic
            console.log('updated');
            setNewPassword('');
            setConfirmPassword('');
            setHide(true);
            setReHide(true);
            navigation.navigate('Login');
        } else {
            // Display an error message indicating that passwords do not match
            console.log('not updated,', 'Its not Same Password');
            setNewPassword('');
            setConfirmPassword('');
            setHide(true);
            setReHide(true);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.push('OtpPasswordVerify')}
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
                        Create{' '}
                        <Text
                            allowFontScaling={false}
                            style={styles.createTextColor}>
                            New Password
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContain}>
                <View style={styles.numberContain}>
                    <TextInput
                        style={styles.number}
                        allowFontScaling={false}
                        placeholder="New Password"
                        placeholderTextColor={'#929292'}
                        secureTextEntry={hide ? true : false}
                        onChangeText={setNewPassword}
                        value={newPassword}
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
                <View style={styles.numberContain}>
                    <TextInput
                        style={styles.number}
                        allowFontScaling={false}
                        placeholder="Re-enter New Password"
                        placeholderTextColor={'#929292'}
                        secureTextEntry={reHide ? true : false}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        // value={phone}
                        // onChangeText={number => setPhone(number)}
                    />
                    <TouchableOpacity
                        style={styles.passwordIcon}
                        onPress={() => {
                            setReHide(!reHide);
                        }}>
                        {reHide ? (
                            <Password width={'100%'} height={'100%'} />
                        ) : (
                            <Passwordopen width={'100%'} height={'100%'} />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handleResetPassword}
                    activeOpacity={0.8}
                    style={styles.verifyButton}>
                    <Text allowFontScaling={false} style={styles.verify}>
                        Update Password
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ResetPassword;

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
        // marginBottom: SIZE.wp('4.5%'),
        alignItems: 'center',
    },
    createText: {
        fontSize: SIZE.wp('7%'),
        lineHeight: SIZE.wp('9%'),
        color: '#222222',
        width: SIZE.wp('62.5%'),
        textAlign: 'center',
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
        marginTop: SIZE.wp('11.5%'),
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
    passwordIcon: {
        width: SIZE.wp('6%'),
        height: SIZE.wp('6%'),
    },
    verifyButton: {
        backgroundColor: '#0FBA12',
        paddingVertical: SIZE.wp('4%'),
        alignItems: 'center',
        borderRadius: SIZE.wp('3%'),
        // marginTop: SIZE.wp('4%'),
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
});
