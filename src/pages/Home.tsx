import Header from '../components/Header'
import Slider from '../components/Slider'
import cover from '../assets/cover.png'

function Home() {
    return (
        <div    style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh', // optional, to show the background
            }}>
            <Header />
            <Slider/>
        </div>
    )
}

export default Home
