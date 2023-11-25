import { StyleSheet} from 'react-native'
import { GlobalColors } from '../infrastructure/GlobalColors'


export const MainStyle = StyleSheet.create({
    activity:{
        alignSelf:'center'
    },
    buttonGlobal:{
        backgroundColor:GlobalColors.primary.darkGreen,
        padding:5,
        borderRadius:0
    },
    label:{
        fontSize:18,
        textTransform:"uppercase"
    },
    btn:{
        marginVertical:15,
        borderRadius:2
    }
})