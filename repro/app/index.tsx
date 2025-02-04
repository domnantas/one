import { Button, Text, View } from 'react-native'

export default function Index() {
  const makeRequest = async (url: string) => {
    const res = await fetch(url)
    console.log(res)
    const data = await res.json()
    console.log(data)
  }

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        gap: 12,
      }}
    >
      <Text>Hello world, from One</Text>
      <Button title="/api/hello" onPress={() => makeRequest('/api/hello')} />
      <Button
        title="http://localhost:8081/api/hello"
        onPress={() => makeRequest('http://localhost:8081/api/hello')}
      />
    </View>
  )
}
