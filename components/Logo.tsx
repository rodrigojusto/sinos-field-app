import { Feather } from '@expo/vector-icons';
import { Box, Text, useTheme } from 'theme';
import { Image, StyleSheet } from 'react-native';

export const Logo = () => {
  return (
    <Box flexDirection="row" paddingLeft="m_16" style={styles.box}>
      <Image source={require('../assets/Logo-Light.png')} style={styles.logo} resizeMode="contain"/>
    </Box>
  );
};

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignContent: 'center',
        backgroundColor:'#ffffff',
        width: '100%',
    },
    logo:{
        width: '50%',
    }
    
})