import { CommonActions } from '@react-navigation/native';

export const reset = (navigation, routeName) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    })
  );
};