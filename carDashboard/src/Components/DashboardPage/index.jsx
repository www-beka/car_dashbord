import Dashboard from "./Dashboard"
import RecommendScreen from "./RecommendScreen"
import Statistics from "./Statistics"

const DashboardPage = () => {
    return(
        <>
            <div className="DashboardPage">
                <Dashboard />
                <Statistics />
                <RecommendScreen />
            </div>
        </>
    )
}

export default DashboardPage