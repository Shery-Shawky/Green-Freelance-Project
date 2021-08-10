import React from 'react'

const aboutus = () => {
    return (
        <div>
            <h1 className=' mt-12 mb-12 font-bold text-center text-2xl'>
                About us
            </h1>
            <div className='bg-green-50 grid md:grid-cols-2 grid-cols-1 mb-12 gap-0'>
                <div className='m-20 text-xl'>
                    <p>
                        It is the common understanding of natural environment that underlies environmentalism — a broad political, social, and philosophical movement that advocates various actions and policies in the interest of protecting what nature remains in the natural environment, or restoring or expanding the role of nature in this environment. While true wilderness is increasingly rare, wild nature (e.g., unmanaged forests, uncultivated grasslands, wildlife, wildflowers) can be found in many locations previously inhabited by humans .
                    </p>
                </div>
                <div className='m-20'>
                    <img src='images/2.jpg' className='object-contain h-80 w-full' />
                </div>

            </div>
        </div>
    )
}

export default aboutus
