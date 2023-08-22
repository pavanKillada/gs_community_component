import './index.css'

const CommunityComponent = ()=>{
    return(
        <div className='main-container'>
            <div className='card-container card'>
                <div className='content-card'>
                    <p className='card-name'>card container name</p>
                    <h1 className='card-heading'>card container heading</h1>
                    <p className='card-description'>card container detailed description.... .... .... ... .... ...</p>
                    <button className='card-btn'>card button</button>
                </div>
            </div>
            <div className='card-container card'>
                <div className='content-card'>
                    <p className='card-name'>card container name</p>
                    <h1 className='card-heading'>card container heading</h1>
                    <p className='card-description'>card container detailed description.... .... .... ... .... ...</p>
                    <button className='card-btn'>card button</button>
                </div>
            </div>
            <div className='card-container card'>
                <div className='content-card'>
                    <p className='card-name'>card container name</p>
                    <h1 className='card-heading'>card container heading</h1>
                    <p className='card-description'>card container detailed description.... .... .... ... .... ...</p>
                    <button className='card-btn'>card button</button>
                </div>
            </div>
            <div className='card-container community'>
                <div>
                    <p className='card-name'>Community</p>
                    <div className='community-content-card content-card'>
                        <h1 className='card-heading'>Join our community</h1>
                        <p className='card-description'>Get support, get involved, and join our community of 10,000+ Astro developers—it all happens on Discord.</p>
                        <button className='card-btn'>Join our Discord</button>
                    </div>
                </div>
                <img className='community-img' src="https://ik.imagekit.io/pavanKillada/community-cloud?updatedAt=1692716248411" alt="community cloud"/>
            </div>
        </div>
        
    )
}

export default CommunityComponent
