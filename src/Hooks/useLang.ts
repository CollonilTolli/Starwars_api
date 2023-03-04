import {useSelector} from 'react-redux/es/exports'
import { useEffect, useState } from 'react'
import { TextConstantsEn, TextConstantsWookiee } from '../constants/TextConstants'

export const useLang = () => {
    const lang = useSelector((state:any)=> state.lang.language)
    const [activeLanguage, setActiveLanguage] = useState(TextConstantsEn)

    useEffect(()=> {
        setActiveLanguage(lang === 'en' ? TextConstantsEn : TextConstantsWookiee)
    }, [lang]) 

    return activeLanguage
}