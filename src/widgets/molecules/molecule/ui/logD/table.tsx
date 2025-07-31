import { Table } from "@mantine/core"

export const LogDTable = ({data}: {data: any}) => {
    return <Table horizontalSpacing="xs" >
        <Table.Thead>
            <Table.Tr>
                <Table.Td>
                    LogD
                </Table.Td>
                <Table.Td>
                    pH
                </Table.Td>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {data.map((val: any, index: number) => (
                <Table.Tr key={index}>
                    <Table.Td>
                        {val.logD}
                    </Table.Td>
                    <Table.Td>
                        {val.pH}
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
}