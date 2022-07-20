import {
  View,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    //   flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#72063c",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    //iOS-specific
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
