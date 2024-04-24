import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContent } from 'components/ScreenContent';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;
type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Lançar Materiais</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.roundGreenButton}>
          <Text style={styles.greenButtonText}>Obras</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={styles.roundGreenButton}>
          <Text style={styles.greenButtonText}>Manutenção</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },title:{
    fontSize: 24,
    fontWeight:'700',
    alignSelf:'center'
  },
  roundGreenButton:{
    backgroundColor: "green",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
  },
  greenButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
