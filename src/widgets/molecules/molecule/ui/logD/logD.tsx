import { Card, Tabs, Title } from "@mantine/core";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { LogDChart } from "./chart";
import { LogDTable } from "./table";

export const LogD = ({data}: {data: any}) => {
    const points = data.data;

    const line = Object.keys(points).map(val => {
        return {
            logD: val,
            pH: points[val]
        }
    })
    return (
    <Card mt={20}>
        <Title size='lg' mb={20}>
            LogD
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
                <LogDChart line={line} />
            </Tabs.Panel>
            <Tabs.Panel value="data">
                <LogDTable data={line}/>
            </Tabs.Panel>
        </Tabs>
    </Card>)
}