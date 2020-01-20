import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText:true
        };
    }

    componentDidMount(){
     setInterval(()=>(
         this.setState(previousState => (
             { isShowingText : !previousState.isShowingText }
         ))
     ),1000);   
    }

    render() {
        if(!this.state.isShowingText) return null;

        return (
        <View>
            <Text> { this.props.text } </Text>
        </View>
        );
    }
}

export default Blink;
