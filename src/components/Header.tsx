import { StyleSheet, Text, View, Image} from 'react-native';

const Header: React.FC = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icon.png')} style={styles.logo}/>
            <Text style={styles.title}>FarmSight</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#047857',
      gap:8,
      padding: 16
    },
  
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
    },
    logo: {
      width: 32,
      height: 32,
    }
  });

export default Header