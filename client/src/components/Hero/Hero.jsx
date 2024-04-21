import './Hero.css'

const Hero = ({heroData }) => {
    return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p className="small-text">{heroData.text2}</p>
        </div>
        <div className="feature-box">
            <p>{heroData.text3}</p>
            <p>{heroData.text4}</p>
            <p>{heroData.text5}</p>
            <p>{heroData.text6}</p>
        </div>
        
    </div>
    )
}
  
export default Hero