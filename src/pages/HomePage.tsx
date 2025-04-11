import { ContactForm } from "../components/ContactIssue"
import { InfoBox } from "../components/InfoBox"
import Navbar2 from "../components/Navbar2"
import { SearchFilter } from "../components/SearchFilter"

export const HomePage = () => {
    return <>
        <SearchFilter />
        <Navbar2 />
        <InfoBox />
        <ContactForm />
        <h1>Hello World</h1>
    </>
}