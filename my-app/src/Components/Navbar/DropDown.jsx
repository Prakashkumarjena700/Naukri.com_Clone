import React from 'react'
import { Jobs, Companies, Services, Foremployers } from './NavbarItem'


export const JobDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='jobSubmenue' className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={() => setDropdown(!dropDown)} >
            {
                Jobs.map((ele) => <p key={ele.id} id={ele.id === "j1" || ele.id <= 6 ? 'noborder' : 'border'} className={ele.id === 'j1' || ele.id === 'j2' || ele.id === 'j3' || ele.id === 'j4' ? 'blocked' : 'not'} >{ele.title}</p>)
            }
        </div>
    )
}
export const CompaniesDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='companiesSubmenue' className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={() => setDropdown(!dropDown)} >
            {
                Companies.map((ele) => <p key={ele.id} id={ele.id === "c1" || ele.id <= 5  ? 'noborder' : 'border'} className={ele.id === 'c1' || ele.id === 'c2' || ele.id === 'c3' ? 'blocked' : 'not'} >{ele.title}</p>)
            }
        </div>
    )
}
export const ServicesDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='serviesSubmenue' className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={() => setDropdown(!dropDown)} >
            {
                Services.map((ele) => <p key={ele.id} id={ele.id === "s1" ||ele.id === "s2"||  ele.id <= 5  ? 'noborder' : 'border'} className={ele.id === 's1' || ele.id === 's2' || ele.id === 's3' || ele.id === 's4' || ele.id === 's5' || ele.id === 's6' ? 'blocked' : 'not'} >{ele.title}</p>)
            }
        </div>
    )
}
export const ForemployersDropDown = () => {
    const [dropDown, setDropdown] = React.useState(false)
    return (
        <div id='foremployersSubmenue' className={dropDown ? 'jobs-submenue clicked' : 'jobs-submenue'} onClick={() => setDropdown(!dropDown)} >
            {
                Foremployers.map((ele) => <p key={ele.id} >{ele.title}</p>)
            }
        </div>
    )
}

