import { Card, Table, Title } from "@mantine/core"

export const Geometry = ({data}: {data: any}) => {
    return (<Card>
        <Title size='md' mb={20}>
            Geometry
        </Title>
         <Table horizontalSpacing="xs">
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>
                        Van der Waals volume
                    </Table.Td>
                    <Table.Td>
                        {data.van_der_waals_volume}
                    </Table.Td>
                    <Table.Td>
                        A^3
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Van der Waals surface area
                    </Table.Td>
                    <Table.Td>
                        {data.van_der_waals_surface_area}
                    </Table.Td>
                    <Table.Td>
                        A^2
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Solvent accessible surface area
                    </Table.Td>
                    <Table.Td>
                        {data.solvent_accessible_surface_area}
                    </Table.Td>
                    <Table.Td>
                        A^2
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Topological polar surface area
                    </Table.Td>
                    <Table.Td>
                        {data.topological_polar_surface_area}
                    </Table.Td>
                    <Table.Td>
                        A^2
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Minimum projection area
                    </Table.Td>
                    <Table.Td>
                        {data.min_projection_area}
                    </Table.Td>
                    <Table.Td>
                        A^2
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Maximum projection area
                    </Table.Td>
                    <Table.Td>
                        {data.max_projection_area}
                    </Table.Td>
                    <Table.Td>
                        A^2
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Minimum projection radius
                    </Table.Td>
                    <Table.Td>
                        {data.min_projection_radius}
                    </Table.Td>
                    <Table.Td>
                        A
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        Maximum projection radius
                    </Table.Td>
                    <Table.Td>
                        {data.max_projection_radius}
                    </Table.Td>
                    <Table.Td>
                        A
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    </Card>)
}