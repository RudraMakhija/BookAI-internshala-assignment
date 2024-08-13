import Authentication from "./Authentication"
import CodeExamples from "./CodeExamples"
import Endpoints from "./Endpoints"
import Header from "./Header"
import Overview from "./Overview"
import PricingTable from "./PricingTable"
import Tutorial from "./Tutorial"
const Landing= ()=>{
    return (
        <>
            <Header/>
            <div id="overview">
                <Overview/>
            </div>
            <div id="authentication">
                <Authentication/>
            </div>
            <div id="endpoints">
                <Endpoints/>
            </div>
            <div id="tutorial">
                <Tutorial/>
            </div>
            <div id="code-examples">
                <CodeExamples/>
            </div>
            <div id="pricing-table">
                <PricingTable/>
            </div>
        </>
    )
}

export default Landing

