import React from 'react'

function About() {
    return (
        <div className="px-32 py-9 max-w-screen-2xl mx-auto">
            <h1 className='font-bold text-zinc-700 text-3xl pb-6 mb-5 w-full border-t-0 border-l-0 border-r-0 border-2'>About Apple</h1>
            <h2 className='font-bold text-zinc-700 text-2xl mb-2'>Introduction</h2>
            <p className='text-zinc-500 text-xl mb-8'>Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple designs, manufactures, and markets a range of consumer electronics, software, and services. The company is widely known for its innovative products, including the iPhone, iPad, Mac computers, Apple Watch, and Apple TV, as well as software such as the macOS and iOS operating systems, the iTunes media player, the Safari web browser, and the iLife and iWork creativity and productivity suites.</p>
            <h2 className='font-bold text-zinc-700 text-2xl mb-2'>History</h2>
            <p className='text-zinc-500 text-xl mb-8'>Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell personal computers. It was incorporated as Apple Computer, Inc. in January 1977, and sales of its computers, including the Apple II, grew quickly. Within a few years, Jobs and Wozniak had hired a staff of computer designers and had a production line. Apple went public in 1980 to instant financial success. Over the next few years, Apple shipped new computers featuring innovative graphical user interfaces, such as the original Macintosh in 1984.However, Jobs was ousted from the company in 1985 following a power struggle with the company's board of directors. Jobs went on to found NeXT, another computer platform development company specializing in state-of-the-art computers for higher-education and business markets. In 1997, Apple acquired NeXT, bringing Jobs back to the company. The acquisition propelled the renaissance of Apple’s fortunes with the launch of the revolutionary iMac in 1998, and the introduction of other cutting-edge products and services.</p>
            <h2 className='font-bold text-zinc-700 text-2xl mb-4'>Innovations and Products</h2>
            <h3 className='text-zinc-700 text-xl mb-3'>Apple is renowned for its innovative products that have revolutionized the tech industry:</h3>
            <ul className='list-disc flex flex-col gap-2 mb-10'>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>iPhone: </span> Launched in 2007, the iPhone revolutionized the smartphone industry with its intuitive touchscreen interface and robust app ecosystem.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>iPad: </span> Introduced in 2010, the iPad created a new category of portable computing devices.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>Mac: </span> Apple's line of personal computers that includes the MacBook, MacBook Air, MacBook Pro, Mac Mini, iMac, and Mac Pro.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>Apple Watch: </span>  A line of smartwatches introduced in 2015, which became the best-selling wearable device.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>Apple TV: </span> A digital media player and microconsole.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>AirPods: </span>  Wireless Bluetooth earbuds introduced in 2016, which have become immensely popular.</li>
            </ul>
            <h2 className='font-bold text-zinc-700 text-2xl mb-4'>Software and Services</h2>
            <h3 className='text-zinc-700 text-xl mb-3'>Apple's ecosystem is complemented by its software and services:</h3>
            <ul className='list-disc flex flex-col gap-2 mb-10'>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>macOS: </span> The operating system for Mac computers.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>iOS: </span> The operating system for iPhone and iPad.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>iTunes: </span>  A media player and library application.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>App Store: </span>  A digital distribution platform for mobile apps on iOS.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>Apple Music: </span> A music streaming service.</li>
                <li className='text-xl text-zinc-700 '><span className='font-bold text-xl'>iCloud: </span> A cloud storage and cloud computing service.</li>
            </ul>
            <h2 className='font-bold text-zinc-700 text-2xl mb-4'>Corporate Social Responsibility</h2>
            <p className='text-zinc-500 text-xl mb-8'>Apple is committed to reducing its environmental impact. The company runs on 100% renewable energy in its facilities worldwide and aims to have a completely carbon-neutral supply chain and products by 2030. Apple also focuses on making its products accessible to everyone, including people with disabilities.</p>
            <h2 className='font-bold text-zinc-700 text-2xl mb-4'>Conclusion</h2>
            <p className='text-zinc-500 text-xl mb-2 pb-14 border-2 border-t-0 border-l-0 border-r-0'>Apple Inc. has transformed the technology landscape with its innovative products and services. From personal computing to smartphones, wearables, and beyond, Apple's commitment to quality and user experience continues to drive its success and influence in the tech industry.</p>
        </div>
    )
}

export default About