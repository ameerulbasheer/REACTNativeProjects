import { useState } from "react";
import {
  View,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNum }) {
  const [enteredNum, setEnteredNum] = useState("");

  const resetInputHandler = () => {
    setEnteredNum("");
  };

  const numberInputHandler = (enteredText) => {
    setEnteredNum(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredNum);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      // show alert!
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNum(chosenNum);
  };

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
          onChangeText={numberInputHandler}
          value={enteredNum}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    //   flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary600,
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
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
