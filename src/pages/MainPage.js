import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersInfoAction, changeReversAction } from '../redux/actions'

export default function MainPage() {
    const dispatch = useDispatch()
    const {regStatus} = useSelector(state => state.regReducer)
    console.log(regStatus)

    const [nameValue, setName] = useState('')
    const [usernameValue, setUserName] = useState('')
    const [emailValue, setEmail] = useState('')
    const [websiteValue, setWebsite] = useState('')

    const sendRegFn = () => {
        dispatch(usersInfoAction(nameValue,usernameValue,emailValue,websiteValue))
        dispatch(changeReversAction())
    }

  return (
    <div>
        <h2>Введите данные пользователя</h2>
        <input type='text' placeholder='name' onChange={(event) => setName(event.target.value)}/>
        <input type='text' placeholder='username' onChange={(event) => setUserName(event.target.value)}/>
        <input type='text' placeholder='e-mail' onChange={(event) => setEmail(event.target.value)}/>
        <input type='text' placeholder='website' onChange={(event) => setWebsite(event.target.value)}/>
        <button onClick={sendRegFn}>send</button>
        {regStatus && <h2>Данные успешно сохранены</h2>}
    </div>
  )
}
