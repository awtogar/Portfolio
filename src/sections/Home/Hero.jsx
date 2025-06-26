import HeroImg from "../../assets/images/home/section/hero.jpg"

const Hero = () => {
    return (
	<div className='h-screen flex flex-col items-center justify-center bg-shade-100 overflow-hidden p-24'>
		<img src={HeroImg} alt="Hero" className='object-cover w-full h-full rounded-3xl bg-shade-100 transition-colors duration-400 ease-out' />
	</div>
    )
}

export default Hero