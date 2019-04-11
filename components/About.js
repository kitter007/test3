//import Library
import React, {Component} from 'react';
import {View,Text,ActivityIndicator } from 'react-native';
import axios from 'axios';

//write component
class About extends Component{
    static navigationOptions = {
        title:'Profile',
    };
    constructor(){ //auto working when class first run
        super();
        this.state={
            name:'',
            email:''
        }
    }

    componentDidMount(){ //work after render() is run
        const url='http://128.199.240.120:9999/api/auth/me';
        const config = {
            headers:{
                accept:'*/*',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2E1YjA4MjE5OGUwMDA4NDcyZGRlNGQiLCJpYXQiOjE1NTQ5NjkzOTN9.yIafF1xw_mzWE3DNuTkED-JdD-vCaSq0sJeD5gsJ0X4'
            }
        }
        axios.get(url,config)
        .then(response =>{
            console.log(response);
            this.setState({
                email: response.data.data.email,
                name: response.data.data.name
            })
        })
        .catch(error=>{
            console.log('error',error);
        })
    }

    render() {
        if (this.state.name == '') {
            return(
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
            );
        }

        return (
            <View>
                <Text style={styles.text}>Name: {this.state.name}</Text>
                <Text style={styles.text}>Email: {this.state.email}</Text>
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 25
    }
}

//export class
export default About;