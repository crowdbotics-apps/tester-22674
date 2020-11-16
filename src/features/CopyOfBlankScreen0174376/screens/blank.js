import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {
    TextInput_8: "",
    DateTimePicker_11: new Date(""),
    TextInput_14: "",
    CheckBox_133: true,
    TextInput_21: ""
  }
  render = () => (
    <View style={styles.View_1}>
      <View>
        <Text>Sample text content</Text>
        <TextInput
          placeholder="Sample text input placeholder"
          value={this.state.TextInput_8}
          onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
        />
        <View>
          <View />
          <View />
        </View>
      </View>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_11}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_11: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_14}
        onChangeText={nextValue => this.setState({ TextInput_14: nextValue })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_133}
        onPress={nextChecked => this.setState({ CheckBox_133: nextChecked })}
      />
      <Icon name="star" />
      <Image />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_21}
        onChangeText={nextValue => this.setState({ TextInput_21: nextValue })}
      />
      <View style={styles.View_109}>
        <View />
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: { flexDirection: "row", flexWrap: "nowrap", alignItems: "flex-end" },
  View_3: {},
  Text_5: {},
  TextInput_8: {},
  View_82: {},
  View_83: {},
  View_84: {},
  DateTimePicker_11: {},
  TextInput_14: {},
  CheckBox_133: {},
  Icon_171: {},
  Image_17: {},
  TextInput_21: {},
  View_109: { flexDirection: "row" },
  View_110: {},
  View_111: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
