import * as React from 'react';
import { Button, View, Text, SafeAreaView} from 'react-native';

const SecondPage = ({ navigation }) => {
    return(
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1, padding: 16}}>
                <View 
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        This is the second page of the app
                    </Text>
                    <Button 
                        onPress={() => navigation.goBack()}
                        title="Go back"
                    />
                    <Button 
                        onPress={() => navigation.push('SecondPage')}
                        title="Go to Second Page... again"
                    />
                    <Button 
                        onPress={() => navigation.replace('ThirdPage', {
                            someParam: 'Param',
                        })}
                        title="Replace this page with Third Page"
                    />
                    <Button 
                        onPress={() => navigation.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'ThirdPage',
                                    params: { someParam: 'reset' },
                                },
                            ],
                        })
                    }
                        title="Reset navigator state to Third Page"
                    />
                    <Button 
                        onPress={() => navigation.navigate('FirstPage')}
                        title="Go to First Page"
                    />
                    <Button 
                        onPress={() => navigation.navigate('ThirdPage', {
                            someParam: 'Param1'
                        })}
                        title="Go to Third Page"
                    />
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    Navigate between screens using
                    {'\n'}
                    React Navigation
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                        www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SecondPage;

