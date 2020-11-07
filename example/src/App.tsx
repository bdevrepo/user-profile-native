import * as React from 'react';
import { StyleSheet, View } from 'react-native';
//import Profile from '@bdevrepo/user-profile-native';

export default function App() {
//  const [result, setResult] = React.useState<number | undefined>();

  /* React.useEffect(() => {
    UserProfileNative.multiply(3, 7).then(setResult);
  }, []); */

  return (
    <View style={styles.container}>
         {/* <Profile/> */} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
