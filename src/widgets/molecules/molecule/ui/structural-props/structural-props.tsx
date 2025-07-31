import { Card, Table, Title } from "@mantine/core"

export const StructProps = ({data}: {data: any}) => {
    return (<Card>
        <Title size='md' mb={20}>
            Stuctural Properties
        </Title>
        <Table horizontalSpacing="xs">
           <Table.Tbody>
               <Table.Tr>
                   <Table.Td>
                    Atom count
                   </Table.Td>
                   <Table.Td>
                       {data.atom_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Heavy atom count
                   </Table.Td>
                   <Table.Td>
                       {data.heavy_atom_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                    Asymmetric atom count
                   </Table.Td>
                   <Table.Td>
                       {data.asymmetric_atom_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                    Rotatable bond count
                   </Table.Td>
                   <Table.Td>
                       {data.rotatable_bond_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Ring count
                   </Table.Td>
                   <Table.Td>
                       {data.ring_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Aromatic ring count
                   </Table.Td>
                   <Table.Td>
                       {data.aromatic_ring_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Hetero ring count
                   </Table.Td>
                   <Table.Td>
                       {data.hetero_ring_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   FSP3
                   </Table.Td>
                   <Table.Td>
                       {data.f_s_p3}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Hydrogen bond donor count
                   </Table.Td>
                   <Table.Td>
                       {data.hydrogen_bond_donor_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Hydrogen bond acceptor count
                   </Table.Td>
                   <Table.Td>
                       {data.hydrogen_bond_acceptor_count}
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Formal charge
                   </Table.Td>
                   <Table.Td>
                       {data.formal_charge}
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
                   Polarizability
                   </Table.Td>
                   <Table.Td>
                       {data.polarizability}
                   </Table.Td>
                   <Table.Td>
                   A^3
                   </Table.Td>
               </Table.Tr>
               <Table.Tr>
                   <Table.Td>
                   Molar refractivity
                   </Table.Td>
                   <Table.Td>
                       {data.molar_refractivity}
                   </Table.Td>
                   <Table.Td>
                   cm^3/mol
                   </Table.Td>
               </Table.Tr>
           </Table.Tbody>
       </Table>
   </Card>)
}