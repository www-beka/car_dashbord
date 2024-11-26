import './Assets.scss'
import { Car_Info } from './Car-Info'
import { CarActivity } from './CarActivity'
const Assets = () => {
    return(
        <>  
            <div className="assetsPage">
                <div className="assetsLeft">
                    <h1>Assets</h1>

                    <Car_Info />
                </div>
                <div className="assetsRight">
                    <CarActivity />
                </div>
            </div>
        </>
    )
}

export default Assets