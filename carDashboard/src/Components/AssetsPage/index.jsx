import './Assets.scss'
import { Car_Info } from './Car-Info'
const Assets = () => {
    return(
        <>  
            <div className="assetsPage">
                <div className="assetsLeft">
                    <h1>Assets</h1>

                    <Car_Info />
                </div>
                <div className="assetsRight">
                    
                </div>
            </div>
        </>
    )
}

export default Assets