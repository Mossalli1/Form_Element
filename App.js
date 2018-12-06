import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, Avatar } from 'react-native-elements';
import { ImagePicker, Camera, Permissions } from 'expo';

export default class App extends React.Component {

  state = {
      image: null,
      // hasCameraPermission: null,
      // type: Camera.Constants.Type.back,
  }

  // async componentDidMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasCameraPermission: status === 'granted' });
  // }
  showIcon(){
    if(this.state.image==null){
      icon=true
    }else{
      this.state.image
    }
  }
  render() {
    //let {image} = this.state;

    // const { hasCameraPermission } = this.state;
    // if (hasCameraPermission === null) {
    //   return <View />;
    // } else if (hasCameraPermission === false) {
    //   return <Text>No access to camera</Text>;
    // } else {
    //   return (
    //     <View style={{ flex: 1 }}>
    //       <Camera style={{ flex: 1 }} type={this.state.type}>
    //         <View
    //           style={{
    //             flex: 1,
    //             backgroundColor: 'transparent',
    //             flexDirection: 'row',
    //           }}>
    //           <TouchableOpacity
    //             style={{
    //               flex: 0.1,
    //               alignSelf: 'flex-end',
    //               alignItems: 'center',
    //             }}
    //             onPress={() => {
    //               this.setState({
    //                 type: this.state.type === Camera.Constants.Type.back
    //                   ? Camera.Constants.Type.front
    //                   : Camera.Constants.Type.back,
    //               });
    //             }}>
    //             <Text
    //               style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
    //               {' '}Flip{' '}
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </Camera>
    //     </View>
    //   );
    // }
  
    

    return (
      <View style={styles.container}>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Avatar
              xlarge
              rounded
              //source={this.showIcon() }
              source={{uri : this.state.image}} // Get Image
              //source={{ uri: image }}
              icon={{name: 'user', type: 'font-awesome'}}
              containerStyle={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}
              onPress={this._pickImage}
            />
          </View>

        <ScrollView>

          <View style={{ flex: 2,flexWrap : 'wrap', }}>
              <FormLabel>First Name</FormLabel>
                <FormInput></FormInput>

              <FormLabel>Last Name</FormLabel>
                <FormInput></FormInput>
              
              <FormLabel>Street Address</FormLabel>
                <FormInput></FormInput>
              
              <FormLabel>Email</FormLabel>
                <FormInput></FormInput>

              <FormLabel>Cell</FormLabel>
                <FormInput></FormInput>

              <FormLabel>Profession</FormLabel>
                <FormInput></FormInput>

              <Button
                title="Pick an image from camera roll"
                onPress={this._pickImage}
              />
            </View>

        </ScrollView>
      </View>
      
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    flexWrap : 'wrap',
    //marginTop : 30
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
