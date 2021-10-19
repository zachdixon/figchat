import * as React from "react";
import ExpoDraw from "expo-draw";

import { Text, View } from "../components/Themed";

export default function Fig() {
  return (
    <View style={{flex: 1}}>
    	<ExpoDraw
        strokes={[]}
        containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
        color={'#000000'}
        strokeWidth={4}
        enabled={true}
        onChangeStrokes={(strokes) => console.log(strokes)}
      />
    </View>
  )
}
