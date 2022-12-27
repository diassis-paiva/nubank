import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity, View, Alert, Text, ScrollView } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons'

import { styles } from './styles';

export default function App() {
  const [SaldoView, setSaldoView] = useState(true)
  
  return (
    <ScrollView style={styles.container}>
      
      <StatusBar translucent backgroundColor='#00000000' style="light" />

      <View style={styles.header}>
        
        <View style={styles.headerInfoUser}>
          <View style={styles.user}>
            <Feather name="user" size={30} color="#fff" />
          </View>

          <View style={styles.utils}>
            <TouchableOpacity onPress={() => {
              setSaldoView(!SaldoView)
            }}>
              <Feather name={ SaldoView == true ? 'eye' : 'eye-off' } size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              Alert.alert('Ajuda')
            }}>
              <Feather name="help-circle" size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              Alert.alert('Enviar email')
            }}>
              <MaterialCommunityIcons name="email-plus-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.nameUser}>
            <Text style={styles.nome}>
              Olá, Gabriela
            </Text>
        </View>
      </View>

      <View style={styles.contaUser}>
        <View style={styles.buttonConta}>

          <View style={{
            paddingHorizontal: 30
          }}>
            <View style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Conta</Text>

            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />

          </View>

          <Text style={{
              fontSize: 22,
              fontWeight: '600',
              marginTop: 15
            }}>R$ 1.356,98</Text>
          </View>

        </View>

        <ScrollView horizontal style={styles.acoesConta}>
          
          <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: '#dddd',
            marginRight: 20
          }} />
                    <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: '#dddd',
            marginRight: 20
          }} />
        </ScrollView>
      </View>
      
    </ScrollView>
  );
}