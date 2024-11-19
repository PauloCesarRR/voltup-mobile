import { StyleSheet, Text, View, Image} from 'react-native';

const Footer : React.FC = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/Account box.png')} style={styles.logo}/>
            <Image source={require('../../assets/icons/History.png')} style={styles.logo}/>
            <Image source={require('../../assets/icons/Space dashboard.png')} style={styles.logo}/>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
    alignSelf: 'baseline',
    width: '100%',
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

export default Footer