import React from "react";
import { Text, View ,StyleSheet, FlatList} from "react-native";


const List = ()=>{
  const friends = [
    {name:"friend 1#", age:20},
    {name:"friend 2#", age:27},
    {name:"friend 3#", age:25},
    {name:"friend 4#", age:26},
    {name:"friend 5#", age:25},
    {name:"friend 7#", age:32},
    {name:"friend 8#", age:21},
    {name:"friend 9#", age:20},
    {name:"friend 10#", age:23}
  ]
    return(
      <FlatList 
      // horizontal
      // to hide the scroll bar at the bottom of the screen
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend)=>{
        friend.name
      }}
      data={friends} 
      renderItem={({item})=>{
        return (
          <Text style={style.textStyle}>{item.name}- Age:{item.age}</Text>
        )
      }}/>
    ) 
}
const style = StyleSheet.create({

  textStyle:{
    marginVertical:50
  }

});
// we can add a key inside each object itself
// KeyExtractor={(obj)=>{key}} -> to attach key prop inside flat list tag itself
// data -> contain the array of records that we want to show on the screen 
// renderItem -> the main purpose of this prop is return each individual item into an element 


export default List;