import {Metadata, NextPage} from "next";

export const metadata: Metadata = {
    title: 'Samuele Sciatore',
    description:
        "Home of Samuele Sciatore's portfolio website",
    viewport:
        'initial-scale=1.0, width=device-width',
}


const Index: NextPage = () => {
    return (
        <div>
            Home page
        </div>
    )
}

export default Index