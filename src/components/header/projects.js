import React from 'react'

const projects = () => {
    return (
        <>
            <h1 className=' mt-12 mb-12 font-bold text-center text-2xl'>
                Projects
            </h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">

                {/* <!--Card 1--> */}
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="images/1.jpg" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Ecosystems</div>
                        <p className="text-gray-700 text-base">
                            Natural environment is often used as a synonym for habitat, for instance, when we say that the natural environment of giraffes is the savanna.
                        </p>
                    </div>
                    <div className="px-24 pt-4 pb-2">
                        <span style={{ color: 'green', textAlign: 'right' }}>Read more</span>
                    </div>
                </div>
                {/* <!--Card 2--> */}
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="images/4.jpg" alt="River" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">River</div>
                        <p className="text-gray-700 text-base">
                            People seldom find absolutely natural environments on Earth, and naturalness usually varies in a continuum. from 100% natural.                       </p>
                    </div>
                    <div className="px-24 pt-4 pb-2">
                        <span style={{ color: 'green', textAlign: 'right' }}>Read more</span>
                    </div>
                </div>

                {/* <!--Card 3--> */}
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="images/3.jpg" alt="Forest" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Biogeochemical</div>
                        <p className="text-gray-700 text-base">
                            In contrast to the natural environment is the built environment. In such areas where humans have fundamentally transformed landscapes.  </p>
                    </div>
                    <div className="px-24 pt-4 pb-2">
                        <span style={{ color: 'green', textAlign: 'right' }}>Read more</span>
                    </div>
                </div>


                {/* <!--Card 4--> */}
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="images/5.png" alt="Forest" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Wilderness</div>
                        <p className="text-gray-700 text-base">
                            The natural environment or natural world encompasses all living and non-living things occurring naturally, meaning in this case not artificial. </p>
                    </div>
                    <div className="px-24 pt-4 pb-2">
                        <span style={{ color: 'green', textAlign: 'right' }}>Read more</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default projects
