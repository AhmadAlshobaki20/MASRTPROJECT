import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { DataContext } from "../context/context";
import { Avatar, Button, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const SrudentTeachersScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState();

  const { Teachers, getAllTeachers } = useContext(DataContext);

  useEffect(() => {
    getAllTeachers();
  }, []);
  const filterTeachers = (text) => {
    const filtered = Teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTeachers(filtered);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#3b8bb7", flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a teacher..."
          onChangeText={(text) => {
            setSearchText(text);
            filterTeachers(text);
          }}
          value={searchText}
        />
        <FlatList
          data={Teachers}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.teacherContainer}
                onPress={() => {
                  navigation.navigate("ReservationPage", { tech: item });
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Avatar
                    rounded
                    source={{
                      uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWERISFRUYEhgSGBIYGBIYGBESEhgRGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISGTErISQxMTQ0NDE0NDE2NDE0NDQxNDQ0NDE0NDE0NDQ0MTQ0NDQ0NDE0NDE0MTQxMTExNDQxMf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBQQGBwj/xAA9EAACAQIEAwUFBQgCAgMAAAABAgADEQQSITEFQVETImFxkQYUMoGxQlNyktEjUmKCocHh8AfxM8IVorL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJhEBAQACAAUFAAMBAQAAAAAAAAECEQMTITFSBBJBUZEiYYHBFP/aAAwDAQACEQMRAD8A+dASwJYENUlgAEoxhHhAKwFOINo5hAYSRM2kvNA5SQgRN5cCEdoAmXIBCMCCSS8l4FkyiZAssiAJMK8GXaAQMl5QEsQJeWJUsGASxgi1MYpgEIwGLWMEkGDDEBYcBqiFAQw4BCWFlrLgCYFtbxtoNoC5IVpIGQm0Yo0lKNI1U0lUgI0i7R7LFMsBZF4BhkwCZKAtAvDYwVMCBZYtpchR1N7D01Pyg1XsCZ2cE4SaoqVqisadJSSO8AzZWKrmHwi677XsOcrllqNOHw8s8pIVQxOGB7wqVeuXLTUeV7nr6eOmmvuTkr+3w517zZKig7jMu+1ttyeU26HB2qZXZKCEMHVFQIE1LABlsSNQNTsonfW4CzKvvCVKoRSBXRiaqg9VBF1GpA1sfC8w50td3/nutbn48RjsCaZuGWoh+Gomx6BhureBnJPW4/2cdENSgwxVI6lRbtd9VAAtUIGpNgRqJ5iqi3NtuQ5jwPiJvjlK4+LwrhdWaKDymcyzBNussxUDDvFZoYgXCBlCS8AxIJV4SiASwxAEISQwQhAWMBgGDCBgCGsBixgi1hAwGiEIAaWIBwQIUqBYAkkzyQMikJ020E58MJ2AaSqxBiX3nQREOIQQ0Bo1hFGADbQRDtpBkodPD6OZzcXCDMwIzAjMq2IvqLsL+F567FV2WktMC5qOlwXUkImdn6FVOVNTowubXmDwilajUe9ixW2qjRGU5tRcAHTMNjvpPRIVepQRtciVDbvZRc0yDZhp8TbG3lObi5da9b02Ht4W9daZw/jZRwr9kym2qOSRfwtPV1+OpRFPMjN2gBCgoDlPQMRcTy9XDUy4VV+Hx0H+3nquN8NoNTwzVNDlVFYWKm4zZTfQjSYf4ZT4t7hBUEVFVqaVyAyNstRr5SMt7q1z3QbZgNrtf577ecOFLELUUZRWBYixFqimzbk7gq2/2jttPpuKoLSwrsP4XsO4M2YdCAL7Hbczxn/ISXoUm5CqQugAsUJuCFAsSt9Li+bWb8K9VOLPdwrv4fPSJREMxbmdLzVGRZQl2hArw1EXaMR4BGQGSUIBBowNFXhKZIaDDBixDUwDEcsUsaDAK8vNBMq8BqtGB5zgw1MByvCihGCBckkknSrOw3SdY2nNQGs6uUo0IeIedDzmeEFtEtGtFNAG8uhSLutNRq5VR5k218JR2mx7L4QPUqVCwXsUZlF0BZ2BC2zaG2v9It1FuHh7spPtrVsPkppTA0UHTYlrML5WGjHJ8QurajnHM+R0fkBUTZlFw5bRdhs4P4YeOofZC7doLWtrmraZDseeW9iLFdROPiqtlVl1ZXLbhgUzFSgJs2l9rG2Yi85L1e5ljrCyfBWEwec9o7uA7MyurAOrZjYEMQLWtz9Zv8WwVUYPtFqPVuUu7soykaDKig35Dl85kYYU3pqB3wpuaZtcN18d57SgqPQp0goANgKagdfiPTaNVwXKSf2TxDFFcHSp3zPUZANxqpVsxtyDBQfOZftbS7TCVWAtlFNwSCGsCAd0B2cHVj8TdJ18dbLVFILlWipFz8N2RWudRca2PkYeIw4alUS1u1puosKY1ZW5gi+uYfzJvaWxntsdmOG+Bd97t8oIgkQrSTqeLS9IQtIRIIVESJVpLSAQDAlSpFMC4YgQxAYsMRStDDSQ0GNBiAYQMB95BAvCEC5YlEyAwDvGK0SN4wREU3MJIq8klBaCPI0nOkeTKNCXM5nnQ5nM5hBTxbGG8W0CgCdBz+s9ZwDBBAgOjNqdVXvEhQBmBUHW2u9yIHsvwIOpqObNa9NDsd9W6X/pv5ei4fhSK5BHeXIptcG4enoTfKe7plO4Omsx4mW+ken6LCY7yvf/AIPHYUsAALA3AXKxNi+tkJDEftBdSVtYFbicuDwwZr6Wvmz9xiWGXQuAS2j88pGm4vNHGuMqKNjkIFrgqDQ+ydWGhF/iUi2s6/Z/CM6ZgbtdW3DllVEsSwAJ1Vh3hcEa+NMe8d3Esx4dyv1XLieBUSe0C5HJXVTlDMeo26z0/BOGBKYIO5Pe+1vbnoNpEwyZlJuFfUEa5W5qRzGhtz0M0uF1lbPTUECnlGb7LXB1X01vzM6bhjeung5cTLtKHiPC6TooYWy2swPfFuZJ3+fnvrMGrwKpSsE762sHWyuBoBcak2GXa/wDrPWoPi6Xt8ojKe8t7FLlT/aRcZV+F6nPhdrufVfnnjuEaliatNkNPvuVVgV7pNxa4FxYjWZ4E/SWKwNLE0jTq01qKwN1YXs3gd1PiLET4n7aezRwdZcuZqNUFqbt8QI+JGP7wuPMEeMmMrlu2vMmUTI0G8lVZMgJlwSIBFoIMoyxAIGHeLEMCAQMMGCIQEBixgi1jeUkXeFeADIYBAwhF3lqYDLxo2iB5xq7REU3JJIHkkocy6Rl9IkmFm0lF1OYhzDYxTmABE9F7Jez/bv2tQfsqZ0HJ3HL8I5+nWed12GpPIaknpPsPAcEaeHo0XIzIoB0AGY6kadL2vztCYDG8NupqJoVF9NNv9+Xltl4CqWvUawNiCbd4hM17gXzAFNQAGUjTSexdcqVDyCn1tPIYuiEU31VgXUC5UaVs2YXuCGt30FxzEx4mOur1PR5+7+N/wADxBszALqGN7/EWIZdQBq5sgswYP4T0/s1UsCBsAl2N7s2VdO93ibDnr12nk2ctUVSdXucvxLbMxzWuBUAsTmWz25Ta9lsUXxL7AKpsoJfKLb3Opvpc/KVxv8AKOn1OO+Df6j1L0LB1Go+JRztzA8ecrgFLLTe5vdzY9VAFj6GdqcvCIwNMrnXl2jnyQjMCPpOm3o+fldac/EwKwsVf5GXm11h7i0g7k0Vyuw5NqJke2PBxisFWogXdAHp9e0UEgD8QzL/ADTcy7eH0iw1mJ6lR/SDs/M7CKInqv8AkLhYw/EayqLJVtVQDaz3zAfzh/6TyxlkhWNQxdpdpAJhBlh5QgEohgQVEIQCAhCATLUyQ0Q4oRghVZlkyryQJLEoiXCwlOsbeJWMkxVd5Jd5ICGbWVfSBm2hgyi6rxbQs0AyR6P2D4elbFguf/EM6qeb3AX0Jv52n1LEUsqi42nhPYHCgUqlQ71HCj8KD9WPpPb4bFF1NN9wbBuZ8/GNB+Pb9iw3zLoeZ855ukDUwjrs9Euy7qbhGUgMDdSVvr1HO82+Lvlpr/Df6TIUZBUqJqrqrjlodQf95r4zLOdnZ6W63rv8MGi1u0K315kJmOfOofSwOhuHU36ibPsi1qtS2wUeQ1Glyb200HmZi8WSzBV0FW1QajIDmfN3NzZm3Frhheavswcoqb30Bv1ANx5/4meM/lHpcfLfAyv9Pf4d4wHvOOgQ+uYf2nFgnOYL0QE+ZtOjDm9Vz1Uf/VtP/wBTpr55fa62/wBvof7zpQzhfDhmqJa2iOp6HVTb0jMOxCXOhpmzDkR1iwjrcagjy9Zx9pdyOSm5+Q/W/pOy8xRXs9TmzvZR4D+19YkTXlv+W+G58NQxQHepOUf8FTY/JlA/nnyRhP0L7R8HOJwVTChgrOqZWN7dojK638CVtfxnwDGYR6dR6VRSjocrIdw3T6axCOYy4WWVJSgEsCQCXIFiFBAhSRISwQIVoVEIcEQwIEEu0qRTAhliSQQDQQ7wRtLEkFJAvJIHHGu0XaHl0kLBlnaXBc6QPovseD7lTuLd6oV8VLk39bz1KUC4JGj21B0DW535GZWAolKNKmu6IgJ0toBe3je/KbNLDDZnZtB3gzA35jKdLS8RWVjsYDelUNm1AvcNmsdD46fOcvs3ig4OGc96zKumlrbX+Q3+W2l+0fs3VY06tF8xRwxViQMpBBAIva4M8+aFeg69orUjUchKh1GbXmD4MflMuJ06x3ek9uW8bdXvP8C9Ziwpn4qN16kEkg6Hc2sP6z0fAcKQoblUJt+EBbHy7wmbiOHj3s1GbMjgFvhzNVX4lsBz3v4nkJ6PBk91jplUkDkASbAegmfDx/k6vU8SThany2cC93qtyAAHkP8AqHgqn7VP4kqn5h0nPgjlpOepA/pGZwgpVDsqPcfa7xFrDnqs6K8eRoD/AMo/iRx6MLRiU7m/7ylT5iZuG4kj1ilsjU11UkXIdVYHz5TVTfQ+hv4GUmUvapuGWPeALgIWOyrc+QGv0nnuHl3PaWym4PIvrrt0mzxamxoVFW+ZxkFhc94gGw8iZWB4cqJlC363PeJ8TzlpZIqvWxa7MR9knIpHO1hPhXtbxZMTjKldE7NWyqAfiYIMoZuhIA05WE++e7jdbqRyubEdLbT4L7X9meIYo0bFC5sRtmsM5HhnzwmMTLDFKS0NR4Xg2Ds9JQWNZTKAhBeWGKcJVhkaf7aAkJLAhluUGAQEbyi1hAGSKlrJllEGAcqXTkK6wCQQh9JaiWiXPnAEESRnZGSBwLa0pmMWW9ZM95VY4NBbwMUWhKRA+u8Oxa1KVOqtiGUHyb7SnxBuI9yb3B3+s+XcF44+Ge695GPepk90+I6N4z6Lw3iNOvT7Sm1/3lOjq3RhylpUVue8GwCuBoLsfsi2pl0K6OWVkDpTUEX1awJ734tWPzMyql7EDnvOvg5yl2PMWkod1fA0igLoKgDZltdWXcDUb7nQ9ZycUxFKnTDZzeoQoQ7m2+v+Oc0K2q5QdPp/ifOuNYs16pdSSi91OmVT8Xz3+YmXEy9s3O7bhTLO6t6R6j/50ZclhbMbgX2851DjVBwuY5MulviPyE8TTe4F4yuEy2YEfxC4PrOO55XvXdjw8Z2j02LwqOWrUK2Z97fbPLbna3KO9n8bXd3Vwe5YM/wp1sP4teUwaL0HAXIKbED9oruBccyCSPnNnAU6xanTDdxRd3vfOuwJbW/TTpL27m+hrU1d/wCtziWJqCmXpP3kBbKQjBraldRfW00uC8RGIoJVFgSNQNr9R4Hcec87x/FnJ2afE4yAgfCDoWbpbU/9xvsmcjimCArImgFhnXXQcgASLeAmvD91lt7OPizGdJ3d/tfxFqGCr1UF2C5R4FyEzfLNefA8on1X/lDjRRFwafFVAZz0pX7qjxYr6L4z5bkPhNo51CmOstdJaLbeMyjr/SWAZZBTj0IHMH1ELOLbfQwOZR5S8sYQt9oeQb6esBKJ1Evs/CMC/wC3MEtAXkhBf9vIYPzjYPaBmhASBL8xAtLSXF5CluYgCAzOLyZoJSUqg+EBnzkl9mOv0kgbj06drGmnyWA9Kj+4hP4TOt0impeE5uXfu/rp5s8Z+EhKNrZE9IQw+G5ono0PsPCTsPCRy75X9ObPGKGGw37iehj8E9Kk+emFpm1ri4uOh6iJ7Dwldh4Ryr5X9TzcfGPV4DiCVrKCA4Fyvh1E1MOoFwbi/hcTyvs9RtUY/wANvXX/ANZuuGFyrEH1F/KdGNsk2wuPuvTofxbEZKRp3BNQZdDfufa/T5meeWgAQAoHkAI2jxE12YMgDU9M6k5SDqO6fredVKhqDLzWURZlhlqhfhKErcEE8wf1gYrhXdAR/wCVh3SOlxNN31EmS+szy4WN+F8ePlj8vN18KE7wVqZOhIAqU/8AI8xeeq9kcI3ZEnUF2INrJbTUDmdOc0sLg17INbnczRwJGWw01OgmfIxl7tcvVZXHWurI43h8gWoNTmN/HMNb+kThHyVKb7AMt/BTvf5GbPE8PnUKeo+s8l7WU2TEdwlQ9NMwBIBtmXX5ATfcmOnLOtcnGa2HxFZ6jhHubKSNcg0UXtfb6zhGEwn7lP5gmI7OCaU5+Vl5V0czHxjsXDYPnTpflMI4fB/d0vysJnmkZOxMjlXypzMfGNAUMH93T9Gl9hg/3Kfo0zuxMnYmOVfK/pzMfGNEUsJ93S9HP9pOxwZ3p0vytb6TP7AydgY5V8r+o5k8Y7+ywf3VL8rfpDFPB/dUvyt+kzewMnYGOVfK/pzJ4xolMHypUvyv+kLJg/u6X5G/SZfYGTsDHKvlf05k+o1MmC+7p/keUUwX3dP8rzLNAye7mOVfK/pzJ9T8aeXBfd0/y1P0lFcF93T/ACPM33Yye7HpHJvlf05k+o0lXB/d0/yPCZMEd6dP0qTM92PSUcMekcm+V/TmT6jT7PBfuU/yvJMv3Y9JI5V8r+nMn1Hf2MsUJ1gQgJrpk4xh5fu/hO0LLtJ0OH3fwk938J35ZREaNg4dSyljtbX0Bi+I8Qv3E1vbbW4PW3Lw5/Xtw/P/AHSVg+FqLW1sTbe+Um+W/IbxlLqaa8HLHG25OPhWFyCoTqWa587D9TNCke6JSD47bFmt5DQfSBQOgmuM1NMc8vdla6Ki7TqQfs7xGIG0YjdwiFW7hDfDysC/1gcOP7AxeGfX5yNdxpMZ5z2ro3em38LD0N/7z0LGZHtCL9kfx/8ArKEeZ92k92mgqwssLbZ3u0sYWaAWXlg24BhZPdfCaAEsLBtn+6y/dZoWktBtn+6ye6zQtKtBtwe6yvdZoWkIg2zvdZPdZoWlWg24PdZfu87iJREG3F7uIxMOOk6LSwYNle7jpJG5pUhDLDwg0kkLCDQs0kkC80l5JIBU2nXha+Unya3nY/4lSTT4V+QUPg9f7xGHOg8xJJJUduJPwyg2hkkgbfCm/Yt84ik1m+ckkJauaZHtA3dp/ib6SSStTGUrQs0qSVSINIGlySBLywZJIFgyiZJIEzSs0uSBWaVmlyQKzSFpUkCs0otJJJAlpReSSBWeXJJA/9k=",
                    }}
                    size="large"
                    containerStyle={styles.avatar}
                  />
                  <Text style={styles.teacherName}>{item.username}</Text>
                  <Text style={styles.teacherDescription}>{item.subject}</Text>
                  <View style={styles.ratingContainer}>
                    <Icon
                      name="star"
                      type="font-awesome"
                      size={16}
                      color="#FFD700"
                    />
                    <Text style={styles.teacherRating}>5.0</Text>
                  </View>
                  <Button title="Reserve" buttonStyle={styles.reserveButton} />
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(teacher) => {
            teacher._id;
          }}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "#4a95b5",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#e9f5fc",
    marginHorizontal: 10,
  },
  subjectBar: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  subjectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "transparent",
  },
  subjectText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    flexDirection: "column",
  },
  teacherContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#e7f4fb",
    shadowColor: "#000",
    elevation: 5,
    justifyContent: "center",
    borderColor: "#4b95b2",
    borderWidth:0.5
  },
  avatar: {
    marginBottom: 10,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  teacherDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  teacherRating: {
    fontSize: 16,
    marginLeft: 6,
  },
  reserveButton: {
    backgroundColor: "#4390b5",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  resetButton: {
    backgroundColor: "#FF5733", // Change to the desired button color
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10, // Adjust the margin as needed
  },
  resetButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SrudentTeachersScreen;
