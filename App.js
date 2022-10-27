import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [value, setValue] = useState("X");
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");
  const [btn3, setBtn3] = useState("");
  const [btn4, setBtn4] = useState("");
  const [btn5, setBtn5] = useState("");
  const [btn6, setBtn6] = useState("");
  const [btn7, setBtn7] = useState("");
  const [btn8, setBtn8] = useState("");
  const [btn9, setBtn9] = useState("");

  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  useEffect(() => {
    if (
      (btn1 == btn2 && btn2 == btn3 && btn3 != "") ||
      (btn4 == btn5 && btn5 == btn6 && btn6 != "") ||
      (btn7 == btn8 && btn8 == btn9 && btn9 != "") ||
      (btn1 == btn4 && btn4 == btn7 && btn7 != "") ||
      (btn2 == btn5 && btn5 == btn8 && btn8 != "") ||
      (btn3 == btn6 && btn6 == btn9 && btn9 != "") ||
      (btn1 == btn5 && btn5 == btn9 && btn9 != "") ||
      (btn3 == btn5 && btn5 == btn7 && btn7 != "")
    ) {
      Alert.alert(value == "X" ? "O win" : "X win", "", [
        {
          text: "Refresh",
          onPress: () => {
            refreshFn();
          },
        },
      ]);
      if (value == "O") {
        setXScore(xScore + 1);
      }
      if (value == "X") {
        setOScore(oScore + 1);
      }
    } else if (
      btn1 != "" &&
      btn2 != "" &&
      btn3 != "" &&
      btn4 != "" &&
      btn5 != "" &&
      btn6 != "" &&
      btn7 != "" &&
      btn8 != "" &&
      btn9 != ""
    ) {
      Alert.alert("Draw", "", [
        {
          text: "Refresh",
          onPress: () => {
            refreshFn();
          },
        },
      ]);
    }
  }, [value]);

  const [fontsLoaded] = useFonts({
    "Mogra-Regular": require("./assets/fonts/Mogra-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const fn = () => {
    if (value == "X") {
      setValue("O");
    }
    if (value == "O") {
      setValue("X");
    }
    if (btn1 == btn2 && btn2 == btn3 && btn3 != "") {
      Alert.alert(value + " win");
    }
  };

  const btn1Fn = () => {
    fn();
    setBtn1(value);
  };

  const btn2Fn = () => {
    fn();
    setBtn2(value);
  };

  const btn3Fn = () => {
    fn();
    setBtn3(value);
  };

  const btn4Fn = () => {
    fn();
    setBtn4(value);
  };

  const btn5Fn = () => {
    fn();
    setBtn5(value);
  };

  const btn6Fn = () => {
    fn();
    setBtn6(value);
  };

  const btn7Fn = () => {
    fn();
    setBtn7(value);
  };

  const btn8Fn = () => {
    fn();
    setBtn8(value);
  };

  const btn9Fn = () => {
    fn();
    setBtn9(value);
  };

  const refreshFn = () => {
    setBtn1("");
    setBtn2("");
    setBtn3("");
    setBtn4("");
    setBtn5("");
    setBtn6("");
    setBtn7("");
    setBtn8("");
    setBtn9("");
  };

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 38 }}>
        {value == "X" ? (
          <Text style={styles.txtScoreT}>x : {xScore}</Text>
        ) : (
          <Text style={styles.txtScore}>x : {xScore}</Text>
        )}

        <View style={styles.line}></View>
        {value == "O" ? (
          <Text style={styles.txtScoreT}>o : {oScore}</Text>
        ) : (
          <Text style={styles.txtScore}>o : {oScore}</Text>
        )}
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.box1} onPress={btn1Fn}>
          {btn1 == "" ? (
            <TouchableOpacity style={styles.box1} onPress={btn1Fn}>
              <Text style={styles.txt}>{btn1}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn1}</Text>
          )}
        </View>

        <View style={styles.box2} onPress={btn2Fn}>
          {btn2 == "" ? (
            <TouchableOpacity style={styles.box2} onPress={btn2Fn}>
              <Text style={styles.txt}>{btn2}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn2}</Text>
          )}
        </View>

        <View style={styles.box3} onPress={btn3Fn}>
          {btn3 == "" ? (
            <TouchableOpacity style={styles.box3} onPress={btn3Fn}>
              <Text style={styles.txt}>{btn3}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn3}</Text>
          )}
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 7,
          marginBottom: 7,
        }}
      >
        <View style={styles.box4} onPress={btn4Fn}>
          {btn4 == "" ? (
            <TouchableOpacity style={styles.box4} onPress={btn4Fn}>
              <Text style={styles.txt}>{btn4}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn4}</Text>
          )}
        </View>

        <View style={styles.box5} onPress={btn5Fn}>
          {btn5 == "" ? (
            <TouchableOpacity style={styles.box5} onPress={btn5Fn}>
              <Text style={styles.txt}>{btn5}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn5}</Text>
          )}
        </View>

        <View style={styles.box6} onPress={btn6Fn}>
          {btn6 == "" ? (
            <TouchableOpacity style={styles.box6} onPress={btn6Fn}>
              <Text style={styles.txt}>{btn6}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn6}</Text>
          )}
        </View>
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.box7} onPress={btn7Fn}>
          {btn7 == "" ? (
            <TouchableOpacity style={styles.box7} onPress={btn7Fn}>
              <Text style={styles.txt}>{btn7}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn7}</Text>
          )}
        </View>

        <View style={styles.box8} onPress={btn8Fn}>
          {btn8 == "" ? (
            <TouchableOpacity style={styles.box8} onPress={btn8Fn}>
              <Text style={styles.txt}>{btn8}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn8}</Text>
          )}
        </View>

        <View style={styles.box9} onPress={btn9Fn}>
          {btn9 == "" ? (
            <TouchableOpacity style={styles.box9} onPress={btn9Fn}>
              <Text style={styles.txt}>{btn9}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.txt}>{btn9}</Text>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.ref} onPress={refreshFn}>
        <Text style={styles.txt3}>Refresh</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box1: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    marginRight: 7,
    marginLeft: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    width: 120,
    height: 120,
    //backgroundColor: "#523939",
    backgroundColor: "#D9D9D9",
    borderTopRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  box4: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  box5: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    marginRight: 7,
    marginLeft: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  box6: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  box7: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  box8: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    marginRight: 7,
    marginLeft: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  box9: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontFamily: "Mogra-Regular",
    fontSize: 48,
    color: "#585858",
    marginTop: 15,
  },
  txt2: {
    fontFamily: "Mogra-Regular",
    fontSize: 48,
    color: "#FFFFFF",
    marginTop: 15,
  },
  txt3: {
    fontFamily: "Mogra-Regular",
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 5,
  },
  txtScore: {
    fontFamily: "Mogra-Regular",
    fontSize: 48,
    color: "#585858",
    marginRight: 45,
    marginLeft: 45,
  },
  txtScoreT: {
    fontFamily: "Mogra-Regular",
    fontSize: 48,
    color: "#523939",
    marginRight: 45,
    marginLeft: 45,
  },
  ref: {
    width: 120,
    height: 40,
    backgroundColor: "#523939",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  line: {
    width: 3,
    height: 53,
    backgroundColor: "#523939",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    borderRadius: 5,
  },
});
