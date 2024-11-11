import MiddlePanel from "./components/mainComponents/MiddlePanel";
import PaymentDueStudents from "./components/mainComponents/paymentPanel";
import UpperTerminal from "./components/mainComponents/UpperTerminal";

const sampleData = [
    { name: 'Samantha William', id: 'ID 123456789', class: 'IX A', reason: 'Bus fee', amount: 7033, advisor: 'Maria Historia' },
    { name: 'Tony Soap', id: 'ID 123456789', class: 'XI B', reason: 'Tuition fee Sem 1', amount: 40096, advisor: 'Dana Benevista' },
    { name: 'Jordan Nico', id: 'ID 123456789', class: 'XII C', reason: 'Library Due', amount: 400, advisor: 'Salvadore Morbeau' },
    { name: 'Karen Hope', id: 'ID 123456789', class: 'VI A', reason: 'Tuition Fee Sem 2', amount: 20036, advisor: 'Dimitres Viga' },
];



export default function MainContent() {
    return (
        <section style={{ width: "70%", Height: '100%' , paddingBottom:"6rem"}}>
            <UpperTerminal />
            <MiddlePanel />
            <PaymentDueStudents data={sampleData} />
        </section>
    )
}
