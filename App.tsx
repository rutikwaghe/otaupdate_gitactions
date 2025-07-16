import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
// import { withStallion } from 'react-native-stallion';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{ color: "#000" }}>third App.tsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App
// export default withStallion(App)

//stallion publish-bundle --upload-path=mbstyx/otpupdate/firstotaupdate --platform=android --release-note="change color"
