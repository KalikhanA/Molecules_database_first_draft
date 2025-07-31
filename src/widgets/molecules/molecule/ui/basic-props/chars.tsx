import { Card, Title } from "@mantine/core";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

export const BasicPropsChart = ({composition}: {composition: string}) => {
    const regex = /([A-Z]) \(([\d.]+)%\)/g;
    let match;
    const elements: any[] = [];

    while ((match = regex.exec(composition)) !== null) {
        const [_, name, value] = match;
        elements.push({
          name: name,
          value: parseFloat(value)
        });
    }

    const renderCustomizedLabel = (data: any) => {
        if (typeof data.index == 'number')
            //@ts-ignore
            return `${elements[data.index].name} (${elements[data.index].value})`
    }
    
    return (<Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title size="md">
            Composition
        </Title>
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                startAngle={360}
                endAngle={0}
                data={elements}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={renderCustomizedLabel}
            />
        </PieChart>
    </Card>)
}