import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import logo from '../../img/logo.svg'
import {General} from '../../util/General'
import Settings from '../../util/Settings'
import {OptionsButton} from './OptionsButton'
import {SmsButton} from './SmsButton'
import {VoiceButton} from './VoiceButton'
import {PhoneCollectorButton} from './PhoneCollectorButton'

export const Popup = () => {
    const [apiKey, setApiKey] = useState(null)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        Settings.getByKey('apiKey').then(setApiKey).catch(console.error)
    }, [])

    useEffect(() => {
        setDisabled(null === apiKey)
    }, [apiKey])

    const handleClickSendVoice = async () => {
        await General.sendVoice()
    }

    return <Grid alignItems='center' container direction='column' justify='center'>
        <img
            src={logo} alt='seven logo'
            style={{marginBottom: '15px', marginTop: '15px', maxWidth: '150px'}}
        />

        <OptionsButton/>
        <SmsButton disabled={disabled} setDisabled={setDisabled}/>
        <VoiceButton disabled={disabled} handleClickSendVoice={handleClickSendVoice}/>
        <PhoneCollectorButton disabled={disabled}/>
    </Grid>
}
