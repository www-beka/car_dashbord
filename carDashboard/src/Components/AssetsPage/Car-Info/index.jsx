import CarImage from '../../../assets/assets-car.png'
import './carInfo.scss'
export const Car_Info = () => {
  return (
    <>  
        <div className="car-Info">
            <div className="info-top">
                <div className="info">
                    <span>
                        Fuel Usage
                        <b>2903.89 Ltr</b>
                    </span>
                    <span>
                        KM Driven
                        <b>2903.89 Ltr</b>
                    </span>
                </div>
                <div className="info">
                    <span>
                        Total Cost
                        <b>$3,00,290.00</b>
                    </span>
                    <span>
                        Top Speed
                        <b>$5.2K</b>
                    </span>
                </div>
            </div>
            <div className="info-bottom">
                <img src={CarImage} alt="" />
            </div>
        </div>
    </>
  )
}
