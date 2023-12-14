import { StyleSheet, Text, View } from 'react-native'
import CustomCheckBox from '../CustomCheckBox'
import CustomButton from '../CustomButton'
import HeightSpacer from '../spacer/HeightSpacer'

const Permission = ({ checked, setChecked, setActiveScreen }) => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>Permission</Text>
        <Text style={styles.content}>
          Magandang umaga/hapon po. Ako po ay si ______. Ako po ay ______ sa ating barangay. Kami po ay nag-i-interview ng lahat ng households sa ating barangay upang kumulekta ng impormasyon tungkol sa socio-economic na kondisyon at tungkol sa migration. Ito po ay makakatulong para magkaroon ng Census ang ating barangay. Nais po sana namin na humingi ng kaunting panahon upang sagutan ang aming mga tanong tungkol sa inyong household at mga miyembro nito. Sinisiguro po namin na lahat ng inyong sagot ay kumpidensyal. Pwede po ba naming hingiin ang inyong pahintulot na kayo ay makapanayam?
        </Text>
      </View>
      <View>
        <CustomCheckBox setChecked={setChecked} checked={checked} label={"Pinahihintulutan ang panayam"}/>
        <CustomButton text={'NEXT'} onPress={() => checked ? setActiveScreen(current => current + 1) : alert('Unable to continue to survey form') }/>
        <HeightSpacer size={10} />
        <CustomButton text={'CANCEL'} bgColor={"#808080"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%', 
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 25  
  },
  content: {
    fontSize: 18,
    textAlign: 'justify'
  }
})

export default Permission
