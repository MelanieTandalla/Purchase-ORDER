import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'white',
    },
    cabecera:{
        width:400,
        height:50,
        backgroundColor:'#08628E',
    },
    texto: {
        color: 'black',
        fontSize: 25,
        paddingHorizontal: 30,
        marginTop: 20,
        marginLeft:70
    },
    linea: {
        color: '#6D746C',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 2,
    },
    modulo: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    titulo: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 120,
        marginLeft:40,
        marginTop: 5,
    },
    nombre: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: -3,
    },
    infoDocumento: {
        color: 'black',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#085A86',
        paddingRight: 12,
    },
    atributos: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    descripcion:{
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    nombreTabla:{
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    generarServer:{
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    tipoEntidad:{
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    compania:{
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    nombreClase:{
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    fecha: {
        color: 'write',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    boton: {
        height: 60,
        width: 90,
        backgroundColor: '#0A8EBC',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop:10,
        marginRight:15,
        //marginTop:20,
        //paddingHorizontal:10,

    },
    botonTexto: {
        textAlign: 'center',
        color: '#000000',
        padding: 10,
        fontWeight: '600',
    },
    generarBot:{
        height: 50,
        width: 300,
        backgroundColor: '#0A8EBC',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop:10,
        marginLeft:30,
    },
    generarBotText:{
        textAlign: 'center',
        color: '#000000',
        padding: 10,
        fontWeight: '600',
    },
    cuadroAtributos:{
        width:340,
        height:50,
        backgroundColor:'#9B9B9B',
        marginTop:10,
        marginLeft:10,
    },
    textoAtributos:{
        color: 'black',
        //fontSize: ,
        paddingHorizontal: 30,
        marginTop: 20,
        textAlign:'center',
    },
});

export const AuthorityStyles = StyleSheet.create({
    nav: {
      backgroundColor: "white",
      flexDirection: "row",
    },
    logo: {
      width: 50,
      height: 50,
      margin: 20,
    },
    Buttom: {
      backgroundColor: 'blue',
      width:200,
      height: 40,
      borderRadius: 15,
      textAlign: 'center'
    },
    fab: {
      
      marginTop: 20,
      right:17,
      backgroundColor: '#00C1FF',
      borderRadius: 15,
      justifyContent: 'center',
      width: 170,
      height: 50,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 0,
    },
    fabText:{
      fontSize: 20,
      alignSelf: 'center',
      color: '#FFFFFF',
      fontWeight: 'bold',
  },
  });