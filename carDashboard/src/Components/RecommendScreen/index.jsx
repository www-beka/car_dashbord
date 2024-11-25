import './RecommendScreen.scss'
import Car1 from '../../assets/car.png'
import FlashIcon from '../../assets/flash.svg'
import Car2 from '../../assets/mini.png'
import Refresh from '../../assets/refresh.svg'
import Round from '../../assets/round.svg'
import Setting from '../../assets/setting-2.svg'
import Car3 from '../../assets/suzuki.png'



const RecommendScreen = () => {
    return(
        <>  
            <div className="RecommendScreen">
                <div className="Recommend-car">
                    <div className="car-reco">
                        <span><img src={Round} alt="" /> 75% Recommed</span>
                        <img src={Car1} alt="" width={247}/>
                        <p>Porsche 911 Carrera</p>
                        <div>
                            <div>
                                <img src={Refresh} alt="" />
                                <span>132K</span>
                                <img src={Setting} alt="" />
                                <img src={FlashIcon} alt="" />
                            </div>
                            <span>$32/h</span>
                        </div>
                    </div>
                    <div className="car-reco">
                        <span><img src={Round} alt="" /> 75% Recommed</span>
                        <img src={Car3} alt="" width={247}/>
                        <p>Porsche 911 Carrera</p>
                        <div>
                            <div>
                                <img src={Refresh} alt="" />
                                <span>132K</span>
                                <img src={Setting} alt="" />
                                <img src={FlashIcon} alt="" />
                            </div>
                            <span>$32/h</span>
                        </div>
                    </div>
                    <div className="car-reco">
                        <span><img src={Round} alt="" /> 75% Recommed</span>
                        <img src={Car2} alt="" width={217}/>
                        <p>Porsche 911 Carrera</p>
                        <div>
                            <div>
                                <img src={Refresh} alt="" />
                                <span>132K</span>
                                <img src={Setting} alt="" />
                                <img src={FlashIcon} alt="" />
                            </div>
                            <span>$32/h</span>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
} 

export default RecommendScreen