import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native'

export default function App() {
  return (
    <View style={styles.pageFinDoctor}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./src/icon/menu.png')} style={styles.iconMenu}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./src/icon/profile.png')} style={{width: 45, height: 45}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.titlePage}>Tìm bác sĩ mong muốn của bạn</Text>
        <View style={styles.inputSearch}>
          <TextInput placeholder="Tìm kiếm bác sỹ" style={styles.input}/>
          <TouchableOpacity style={styles.buttonSearch}>
            <Image source={require('./src/icon/loupe.png')} style={styles.iconLoupe}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.listFaculty}>
            <Text style={styles.titlePart}>Danh sách chuyên khoa </Text>
            <ScrollView horizontal={true}>
              <View  style={styles.showListFaculty}>
                <View style={styles.itemFaculty}>
                  <View style={[styles.button, {backgroundColor: '#59A0E4'}]}>
                    <Image source={require('./src/icon/molar-tooth.png')} style={styles.iconButton}/>
                  </View>
                  <Text style={styles.titleButton}>Răng</Text>
                </View>
                <View style={styles.itemFaculty}>
                  <View style={[styles.button, {backgroundColor: '#FFB167'}]}>
                    <Image source={require('./src/icon/heartbeat.png')} style={styles.iconButton}/>
                  </View>
                  <Text style={styles.titleButton}>Tim Mạch</Text>
                </View>
                <View style={styles.itemFaculty}>
                  <View style={[styles.button, {backgroundColor: '#F57E71'}]}>
                    <Image source={require('./src/icon/eye.png')} style={styles.iconButton}/>
                  </View>
                  <Text style={styles.titleButton}>Mắt</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.listFaculty}>
            <Text style={styles.titlePart}>Các Bác Sỹ hàng đầu </Text>
            <View style={styles.contentPart}>
              <View style={styles.item}>
                <Image source={require('./src/image/doctor.jpg')} style={styles.imageItem}/>
                <View style={styles.contentItem}>
                  <Text style={styles.nameDoctor}>Bs. Nguyễn Thị Xuân Mai</Text>
                  <Text style={styles.specialized}>CK Răng - Bệnh viện Răng Hàm Mặt TP.HCM</Text>
                </View>
              </View>
              <View style={styles.item}>
                <Image source={require('./src/image/doctor.jpg')} style={styles.imageItem}/>
                <View style={styles.contentItem}>
                  <Text style={styles.nameDoctor}>Bs. Võ Thành Nhân</Text>
                  <Text style={styles.specialized}>CK Tim mạch - Bệnh viện Đa khoa Quốc tế Vinmec Central Park</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  pageFinDoctor: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconMenu: {
    marginTop: 10,
    width: 25,
    height: 25,
    tintColor: '#292685',
  },
  content: {
    marginTop: 5,
    flexDirection: 'column',
  },
  titlePage: {
    fontSize: 26,
    color: '#1E1C61',
    fontWeight: 'bold',
  },
  inputSearch: {
    flexDirection: 'row',
  },
  buttonSearch: {
    backgroundColor: '#4B7FFB',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 52,
  },
  input: {
    marginLeft: 10,
    width: Dimensions.get('window').width - 110,
  },
  iconLoupe: {
    marginLeft: 25,
    marginRight: 25,
    height: 20,
    width: 20,
    tintColor: '#ffff',
  },
  listFaculty: {
    marginTop: 40,
    flexDirection: 'column',
  },
  titlePart: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentPart: {
    marginTop: 2,
    marginLeft: 8,
    flexDirection: 'column',
  },
  titleButton: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    marginTop: 15,
    flexDirection: 'row',
  },
  imageItem: {
    width: 54,
    height: 65, 
    borderRadius: 10,
  },
  contentItem: {
    marginLeft: 10,
    marginTop: 4,
    flexDirection: 'column',
    width: Dimensions.get('window').width - 90,
  },
  showListFaculty: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 10,
  },
  itemFaculty: {
    marginLeft: 15,
    marginRight: 35,
    flexDirection: 'column',
  },
  
  button:{
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 80,
    height: 70,
  },
  iconButton: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 25,
    height: 25,
    tintColor: '#ffffff',
  },
  nameDoctor: {
    fontSize: 16,
    color: '#1E1C61',
  },
  specialized: {
    marginTop: 3,
    fontSize: 11,
    color: '#1E1C61',
  },

})
