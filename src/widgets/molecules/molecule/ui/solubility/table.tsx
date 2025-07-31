import { Table } from "@mantine/core"

export const SolubilityTable = ({data}: {data: any}) => {
    return <Table horizontalSpacing="xs" >
        <Table.Thead>
            <Table.Tr>
                <Table.Td>
                    pH
                </Table.Td>
                <Table.Td>
                    mg/ml
                </Table.Td>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {data.map((val: any, index: number) => (
                <Table.Tr key={index}>
                    <Table.Td>
                        {val.ph}
                    </Table.Td>
                    <Table.Td>
                        {val['mg/ml']}
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
}