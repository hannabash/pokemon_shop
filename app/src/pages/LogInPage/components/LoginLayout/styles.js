const styles = () => ({
   wrapper: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border:'2px solid gray',
      width: 300,
      margin: '100px auto',
      borderRadius: 30,
      backgroundColor: 'white',
      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
   },
   inputWrapper: {
      marginBottom: 25,

      '&:last-of-type': {
         marginBottom: 0,
      }
   },
   errorMassage: {
      margin:20,
      color:'red',
      fontSize:20,
   },
});

export default styles; 