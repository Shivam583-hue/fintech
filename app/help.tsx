import { View, Text, StyleSheet } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={styles.header}>Help & Support</Text>
      <Text style={styles.content}>
        Need assistance? Here's how to get help...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: Colors.gray,
    lineHeight: 24,
  },
});

export default Page;