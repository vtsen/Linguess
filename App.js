import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import questions from "./assets/languages.json";

const App = () => {
  const getRandomQuestion = () => questions[Math.floor(Math.random() * questions.length)];

  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setResult(option === currentQuestion.answer ? "Correct!" : "Wrong!");
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(getRandomQuestion());
    setSelectedOption(null);
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
        {result && <Text style={styles.resultText}>{result}</Text>}
        {result && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
            <Text style={styles.nextButtonText}>Next Question</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'lightblue',
  },
  content: {
    width: "90%",
    alignItems: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  optionButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "lightgray",
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  nextButtonText: {
    color: "white",
  },
});

export default App;

