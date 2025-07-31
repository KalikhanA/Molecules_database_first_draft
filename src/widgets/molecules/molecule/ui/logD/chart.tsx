import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

export const LogDChart = ({line}: {line: any}) => {
    return (
        <LineChart
            width={900}
            height={400}
            data={line}
            margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pH" stroke="#82ca9d" />
        </LineChart>
    )
}