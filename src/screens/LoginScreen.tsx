import { FC } from 'react'
import { Image, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import { loginStyles } from '../themes/logintheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface Props extends NativeStackScreenProps<any, any> {
}

export const LoginScreen:FC <Props> = ({navigation}) => {

  const onLogin = () => {
    console.log("login")
    navigation.navigate("ListPurchaseScreen");
  }

 return (
  <>
  <KeyboardAvoidingView
    style={{flex:1}}
    behavior={'height'}
  >
    <View style={loginStyles.Login}>
        <View style={loginStyles.Group971}>
          <Image
            style={loginStyles.Image1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zql738rcui-32%3A1382?alt=media&token=945fe085-c294-4d14-8e78-2a9e0e7df3d2",
            }}
          />
          <View style={loginStyles.Group598}>
            <View style={loginStyles.Component1}>
              <View style={loginStyles.Group351}>
                <View style={loginStyles.Button}>
                  <View style={loginStyles.Group081}>
                    <Text style={loginStyles.SignUp}>Sign Up</Text>
                  </View>
                </View>
                  <Text style={loginStyles.Bienvenidos}>Bienvenidos</Text>
                
                  <TextInput
                    placeholder='"Ingrese su email'
                   style={loginStyles.EMail}>E-mail</TextInput>

                  <TextInput
                  placeholder='Ingrese su contraseña'                  
                   style={loginStyles.Password}>Password</TextInput>
                <View>
                  <TouchableOpacity activeOpacity={0.8} style={loginStyles.Button1} onPress={onLogin}>
                    <Text style={loginStyles.LogIn}>Log In</Text>
                  </TouchableOpacity>
                  
                </View>
                <Text style={loginStyles.OlivdasteTuContraseA}>
                  Olivdaste tu contraseña?
                </Text>
              </View>
              <View style={loginStyles.Button2}>
                <Text style={loginStyles.LogIn1}>Log In</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  </>

 )
}