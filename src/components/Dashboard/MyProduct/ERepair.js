import { useState, useContext, useCallback, useRef, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ERepairScreen from '../../../screens/Dashboard/MyProduct/ERepair'
import StaticText from '../../../global/StaticText'
import { GlobalContext } from '../../../context/Provider'
import eRepair from '../../../context/actions/dashboard/eRepair'

const ERepair = ({ route, navigation }) => {
  const { navigate, goBack } = useNavigation()
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const { warrantyId } = route.params
  const {
    eRepairState: { error, loading, data },
    eRepairDispatch
  } = useContext(GlobalContext)

  const onPress = route => route ? navigate(route, warrantyId) : goBack()

  const onChange = ({ name, value }) => {
    setForm(form => {
      return { ...form, [name]: value }
    })

    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null }
      })
    } else {
      setErrors(prev => {
        return { ...prev, [name]: StaticText.alert.error }
      })
    }
  }

  const onSubmit = () => {
    if (!form.subject) {
      setErrors(prev => {
        return { ...prev, subject: StaticText.alert.error }
      })
    }
    if (!form.message) {
      setErrors(prev => {
        return { ...prev, message: StaticText.alert.error }
      })
    }
    if (form.subject && form.message) {
      eRepair(form, warrantyId)(eRepairDispatch)(response => {
        setForm({})
        //Alert.alert(response?.message)
      })
    }
  }

  // useEffect(() => {
  //   errors?.message?.length && Alert.alert(StaticText.alert.error_heading, errors?.message, [
  //     { text: StaticText.button.ok, onPress: () => { } },
  //   ])
  // }, [errors])

  return (
    <ERepairScreen
      onChange={onChange}
      onSubmit={onSubmit}
      errors={errors}
      error={error}
      onPress={onPress}
      loading={loading}
      form={form}
    />
  )
}
export default ERepair