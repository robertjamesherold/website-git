import { Home } from '@ly/Home/Home';
import { Story } from '@ly/Story/Story'
import { Skills } from '@ly/Skills/Skills'
import { CV } from '@ly/Lebenslauf/Lebenslauf'
import { Projekte } from '@ly/Projekte/Projekte.jsx'
import { Contact } from '@ly/Contact/Contact.jsx'

export function Startseite() {
    return (
 
        <Home/>
    )
}  

export function Storyseite() {
    return (
        <Story/>
    )
}  

export function Skillseite() {
    return (
        <Skills/>
    )
}  
export function Lebenslaufseite() {
    return (
        <CV/>
    )
}  


export function Projektseite() {
    return (

        <Projekte/>
    
    )
}  


export function Kontaktseite() {
    return (

        <Contact/>
    
    )
}  
