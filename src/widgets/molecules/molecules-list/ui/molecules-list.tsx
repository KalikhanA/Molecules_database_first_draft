'use client'

import { Button, Card, Container, GridCol, Group, Text, TextInput } from "@mantine/core"
import { $molecules, MoleculesGate, getMolecules } from "../model"
import { useGate, useUnit } from "effector-react"
import Link from "next/link"

const MoleculesList = () => {
    useGate(MoleculesGate)
    const [molecules, changePage] = useUnit([$molecules, getMolecules])
    // useEffect(() => {
    //     //@ts-ignore
    //     // console.log(ChemDoodle.getVersion())
    //   }, [])
    console.log(molecules);
    
    return <main>
        <Container>
            <TextInput
                placeholder="Search"
            />
            
                {molecules.map((molecule, index) => {
                    return (
                    <Card key={index}>
                        <Group>
                            <Text>
                                {molecule.traditional_name}
                            </Text>
                        </Group>
                        <Link href={`/molecules/${molecule._id}`}>
                            <Button >
                                View full info
                            </Button>
                        </Link>
                    </Card>)
                })}
        </Container>
    </main>
}

export {MoleculesList}