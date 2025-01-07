import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const Page = () => {
  const [countryCode, setCountryCode] = React.useState('+91')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started.</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number and we'll send you a code to verify your
          identity.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Country code' placeholderTextColor={Colors.gray} value={countryCode} />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder='Mobile number' keyboardType='numeric' value={phoneNumber} onChangeText={setPhoneNumber} placeholderTextColor={Colors.gray} />
        </View>
        <Link href={'/login'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}>
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page
