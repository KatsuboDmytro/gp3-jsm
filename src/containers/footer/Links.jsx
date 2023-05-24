import React from 'react'
import { footerLinks } from '../../data/data'

export const Links = () => {
    return (
        <>  
        {
            footerLinks.map((link, index) => (
                <div className="gpt3__footer-links_div flex-col" key={index}>
                    <h4>{link.header}</h4>
                    <p>{link.first_text}</p>
                    <p>{link.second_text}</p>
                    <p>{link.third_text}</p>
                    <p>{link.forth_text}</p>
                    <p>{link.fifth_text}</p>
                </div>
            ))
        }
        </>
    )
}
