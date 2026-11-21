import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
  {
    data: [
      {
        name: 'Iced Matcha Latte',
        image: 'https://iswari.s3.eu-west-3.amazonaws.com/blog/wxzaur-.jpg'
      },
      {
        name: 'Cappuccino Coffee',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuvQqabWJE0vOPwj6iwvDch54VhQmZRjIGBWP3BhzBLWDbjPUjUH3fiE&s=10'
      },
      {
        name: 'Iced Mocha Latte',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRCYxSMdS0hRM9L46O8n_CdtPCRfPn0Rr4bm3cv4CkFhbbCfIhxoABfM_&s=10'
      },
    ],
    title: 'Drinks',
    bgcolor: '#BDE3FF',
    cardbgcolor: '#C2EBFF',
    icon: 'mug-hot',
    iconColor: 'skyblue',
  },
  {
    data: [
      {
        name: 'Strawberry Shortcake',
        image: 'https://www.okonomikitchen.com/wp-content/uploads/2025/07/japanese-strawberry-shortcake-ichigo-shortcake-recipe.jpg'
      },
      {
        name: 'Egg Sandwich',
        image: 'https://www.seriouseats.com/thmb/aMMTNItqlECniKNwdbuJEkcO-JM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/the-best-egg-salad-recipe-hero-01_1-c43c237378d84a75ab5dc3f9b0bd1344.JPG'
      },
      {
        name: 'Butter Crossaint',
        image: 'https://fieldandfire.com/wp-content/uploads/2020/03/ButterCroissant-scaled.jpg'
      },
    ],
    title: 'Pastries',
    bgcolor: '#E9C4B5',
    cardbgcolor: '#F2DED3',
    icon: 'cookie-bite',
    iconColor: '#F28F8F',
  }
];


const renderItem = ({ item, index, section }) => {
  return (
      <TouchableOpacity
          style={[
            styles.opacityStyle,
            { backgroundColor: section.cardbgcolor }
          ]}
          onPress={() => {
            Alert.alert(section.title + ' - ' + item.name + ' selected!');
          }}>

        <Text style={styles.textStyle}>{item.name}</Text>

        <Image
            source={{ uri: item.image }}
            style={styles.imageStyle}
            resizeMode="cover"
        />

      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Cozy Café</Text>
        <Text style={styles.subtitleStyle}>
          Discover your favourite drinks and pastries!
        </Text>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Alert.alert('Welcome to Cozy Café!', 'Enjoy freshly brewed drinks and delightful treats in a cozy atmosphere!');
            }}>
          <FontAwesome6 name="map" size={18} color="white" />
          <Text style={styles.buttonText}>Explore Menu</Text>
        </TouchableOpacity>

        <SectionList
            sections={datasource}
            contentContainerStyle={{ padding: 10 }}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.name + index}
            renderSectionHeader={({ section: { title, bgcolor, icon, iconColor } }) => (
                <View style={[styles.headerStyle, { backgroundColor: bgcolor }]}>
                  <FontAwesome6 name={icon} size={22} color={iconColor} />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />

        <StatusBar style="auto" />
      </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    marginTop: 20,
    marginBottom: 20,
  },

  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D69489',
    textAlign: 'center',
    marginTop: 15,
  },

  subtitleStyle: {
    fontSize: 15,
    color: '#89BED6',
    textAlign: 'center',
    margin: 8,
  },

  opacityStyle: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 5,
  },

  textStyle: {
    fontSize: 18,
    color: '#754C32',
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
    marginRight: 8,
  },

  imageStyle: {
    width: 110,
    height: 100,
    borderRadius: 10,
  },

  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00416B',
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonStyle: {
    backgroundColor: '#C47272',
    padding: 12,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
