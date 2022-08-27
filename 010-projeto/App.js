import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, alert, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';


function Separator (){
  return < View style = {styles.separator}/>
}


export default function App() {
  return (
    <SafeAreaView style = {styles.container}>

      <View> 
        <Button> title = "Aqperte aqui" onpress={() =>{alert('Simples')}} </Button>
      </View>
    <Separator/>
<View>
    <Text style = {styles.title}>

    TEXTO1

    </Text>
    <Button title ="Aperte aqui" color = "#f194ff" onPress = { () => { alert('cannot')}} /> 
</View>
<Separator/>
<View>
    <Text style = {styles.title} >
      TEXTO2
    </Text>
    <Button title = "Aperte aqui" disabled onPress={() =>{alert('Cannot')}}/>
</View>
<Separator/>
<View> 
<Text style ={styles.title}>
  Texto3
</Text>
<View  style= {styles.fixToText}>
  <Button title = "Botao esquerdo" onPress = {() => {alert('Left button pressed')} }/>
</View>
<Button title = "Botao direito" onPress = {() => { alert ('RIght button pressed')}}/>
<View>

</View>

</View>
<Separator/>
<Separator/>
<Separator/> 


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    marginTop: Constantes.StatusBarHeigth,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separtor: { 
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderButtomWidth: StyleSheet.hairlineWidth,
  },

 
  
  
});
