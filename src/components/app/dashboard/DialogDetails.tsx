import { View } from 'react-native'
import React from 'react'
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { GlobalColors } from '../../../infrastructure/GlobalColors';

type dialog={
    visible:boolean;
    onDismiss():void;
}

const DialogDetails = (props:dialog) => {
  return (
    <View>
      <Portal>
            <Dialog visible={props.visible} onDismiss={props.onDismiss}>
              <Dialog.Title>Order Status</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">You are about to change the status of this order. please confirm by clicking the submit button.</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={props.onDismiss} textColor='red'>Cancel</Button>
                <Button onPress={props.onDismiss} mode='outlined' textColor={GlobalColors.primary.level2Green}>Submit</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
    </View>
  )
}

export default React.memo(DialogDetails)
