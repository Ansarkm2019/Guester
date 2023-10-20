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

const SignUpName = ({navigation}) => {
    // state
    const [name, setName] = useState('');
    // console.log(name);

    const handSubmit = () => {
        console.log(name);
        setName('');
    };
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
                        What should Guester{' '}
                        <Text
                            allowFontScaling={false}
                            style={styles.createTextColor}>
                            call you?
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContain}>
                <View style={styles.numberContain}>
                    <TextInput
                        style={styles.name}
                        allowFontScaling={false}
                        placeholder="Full Name"
                        placeholderTextColor={'#929292'}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (name !== undefined && name.trim() !== '') {
                            handSubmit();
                            navigation.navigate('SignLocation');
                        }
                    }}
                    activeOpacity={0.8}
                    style={styles.verifyButton}>
                    <Text allowFontScaling={false} style={styles.nextText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUpName;

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
    verifyButton: {
        backgroundColor: '#0FBA12',
        paddingVertical: SIZE.wp('5%'),
        alignItems: 'center',
        borderRadius: SIZE.wp('3%'),
        marginTop: SIZE.wp('4%'),
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
