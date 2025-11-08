import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-5xl text-dark-200 font-bold'>Welcome!</Text>
      </View>
    </SafeAreaProvider>
  );
}
