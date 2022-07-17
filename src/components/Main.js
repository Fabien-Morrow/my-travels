import Travel from "./Travel"

import travels from "../data"

export default function Main() {
    const wrappedTravels = travels.map( travel => {
        return (
            <Travel
            {...travel}
            />
        )
    })

    return (
        <div className="main">
            {wrappedTravels}         
        </div>
    )
}