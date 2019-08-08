import React from 'react';
import { View, ScrollView, Text, ImageBackground } from 'react-native';
import backgroundImage from '../../../assets/images/action-cook-cooking-2237189.jpg';
import { Input, Button, Section, FormSection } from '../../common';

const Signin = ({ navigation }) => {
  const { 
    blurBackground,
    contentStyles,
    fontStyle,
    formStyle,
    buttonSection,
    textStyle,
    buttonStyle,
    centralize,
    facebookButtonStyle,
    googleButtonStyle,
    googleTextStyle
  } = styles;
  return (
    <ImageBackground 
      style={blurBackground}
      source={backgroundImage}
      blurRadius={10}
    >
      <ScrollView style={contentStyles}>
        <Text style={fontStyle}>Log into your account</Text>
        <View style={formStyle}>
          <FormSection>
            <Input
              placeholder="Email"
              placeholderTextColor="#dedede"
            />
          </FormSection>
          <FormSection>
            <Input
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#fff"
            />
          </FormSection>
          <View style={buttonSection}>
            <Section>
              <Button textStyle={textStyle} buttonStyle={buttonStyle}>
                Login
              </Button>
            </Section>
            <Text style={centralize}>- OR -</Text>
            <Section>
              <Button 
                textStyle={textStyle} 
                buttonStyle={facebookButtonStyle}
              >
                facebook login
              </Button>
              <Button 
                textStyle={googleTextStyle} 
                buttonStyle={googleButtonStyle}
              >
                google login
              </Button>
            </Section>
          </View>
        </View>
        <Section sectionStyle={centralize}>
          <Text style={styles.loginMessageStyle}>Don't have an account? </Text>
          <Button 
            textStyle={styles.linkStyle}
            onPress={() => navigation.navigate('Signup')}
          >
            Signup
          </Button>
        </Section>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = {
  centralize: {
    color: '#fff',
    alignSelf: 'center',
  },
  blurBackground: {
    height: '100%',
    width: '100%'
  },
  contentStyles: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 100,
  },
  fontStyle: {
    fontSize: 58,
    color: '#fff'
  },
  loginFontStyle: {
    alignSelf: 'center', 
    marginTop: 50, 
    color: '#e41749'
  },
  loginMessageStyle:{
    alignSelf: 'center', 
    marginTop: 50, 
    color: '#fff'
  },
  formStyle: {
    marginTop: 50
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  linkStyle: {
    alignSelf: 'center',
    color: '#e41749',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 50, 
  },
  googleTextStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e41749',
    borderRadius: 65,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonSection: {
    marginTop: 30
  },
  facebookButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#3e64ff',
    borderRadius: 65,
    marginLeft: 5,
    marginRight: 5,
    padding: 2
  },
  googleButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 65,
    marginLeft: 5,
    marginRight: 5,
    padding: 2
  },
}

export default Signin;
