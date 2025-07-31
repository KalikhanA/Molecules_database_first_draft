import { Card, Table } from "@mantine/core"

export const BasicPropsTable = ({data}: {data: any}) => {
    return (<Card shadow="sm" padding="lg" radius="md" withBorder>
        <Table horizontalSpacing="xs">
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>
                        Molar mass
                    </Table.Td>
                    <Table.Td>
                        {data.molar_mass}
                    </Table.Td>
                    <Table.Td>
                        g/mol
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Exact mass
                    </Table.Td>
                    <Table.Td>
                        {data.exact_mass}
                    </Table.Td>
                    <Table.Td>
                        Da
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Formula
                    </Table.Td>
                    <Table.Td>
                        {data.formula}
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Composition
                    </Table.Td>
                    <Table.Td>
                        {data.composition}
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Lipinski's rule of five
                    </Table.Td>
                    <Table.Td>
                        {data.lipinski_rule_of_five}
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    </Card>)
}