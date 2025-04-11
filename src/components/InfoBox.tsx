import { FederalGovt } from "./Federal"
import { LocalGovt } from "./Local"
import { StateGovt } from "./State"

export const InfoBox = () => {
    return (
        <div>
            <FederalGovt />
            <StateGovt />
            <LocalGovt />
        </div>
    )
}