/*
<a target="_blank" href="https://icons8.com/icon/85044/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
*/
import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt=7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/Tindavetran10" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/tinttgade/" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                    </div>
                </a>
            </div>

            <p className="text-white-500"> 2024 Tin Tran. All rights reserved</p>
        </section>
    )
}
export default Footer
