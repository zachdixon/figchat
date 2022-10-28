import * as React from "react";
import ExpoDraw from "expo-draw";
// import * as Pixi from "expo-pixi";
import { Image } from "react-native";
import { TriangleColorPicker } from "react-native-color-picker";
import { Text, View } from "../components/Themed";

export default function Fig() {
  const sketchRef = React.useRef();
  const [sketchUri, setSketchUri] = React.useState();
  const [strokeColor, setStrokeColor] = React.useState(0x000000);

  console.log({ strokeColor });
  const onSketchChange = React.useCallback(async () => {
    const { uri } = await sketchRef.current.takeSnapshotAsync({
      format: "png",
    });
    setSketchUri(uri);
  }, [setSketchUri]);

  return (
    <View style={{ flex: 1 }}>
      {/* <ExpoDraw
        strokes={[]}
        containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
        color={'#000000'}
        strokeWidth={4}
        enabled={true}
        onChangeStrokes={(strokes) => console.log(strokes)}
      /> */}
      {/* <Pixi.Sketch
        ref={(ref) => (sketchRef.current = ref)}
        style={{ flex: 1 }}
        strokeColor={strokeColor}
        strokeWidth={10}
        strokeAlpha={1}
        onChange={onSketchChange}
      /> */}
      <TriangleColorPicker
        onColorSelected={(color) =>
          setStrokeColor(Number(color.replace("#", "0x")))
        }
        style={{ flex: 1 }}
      />
    </View>
  );
}
