import { Card, Tabs, Title } from "@mantine/core";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { SolubilityChart } from "./chart";
import { SolubilityTable } from "./table";

export const Solubility = ({data}: {data: any}) => {
    const points = data.data;

    const line = Object.keys(points).map(val => {
        return {
            ph: val,
            'mg/ml': points[val]
        }
    })
    return (
    <Card mt={20}>
        <Title size='lg' mb={20}>
            Solubility
        </Title>
         <Tabs defaultValue="chart">
            <Tabs.List>
                <Tabs.Tab value="chart">
                        Chart
                    </Tabs.Tab>
                    <Tabs.Tab value="data">
                        Data
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="chart">
                <SolubilityChart line={line} />
            </Tabs.Panel>
            <Tabs.Panel value="data">
                <SolubilityTable data={line}/>
            </Tabs.Panel>
        </Tabs>
    </Card>)
}