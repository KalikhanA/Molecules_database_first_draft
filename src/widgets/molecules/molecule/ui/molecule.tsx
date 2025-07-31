'use client'

import { Container, Grid, GridCol, Title } from "@mantine/core"
import { BasicProps } from "./basic-props/basic-props"
import { Geometry } from "./geometry"
import { StructProps } from "./structural-props"
import { LogD } from "./logD"
import { Solubility } from "./solubility"

const MoleculeView = ({data}: {data: any}) => {
    
    return <Container>
        <Title>
            {data.traditional_name}
        </Title>
        <BasicProps data={data.basic_property}/>
        <Grid>
            <GridCol span={5}>
                <Geometry data={data.geometry}/>
            </GridCol>
            <GridCol span={7}>
                <StructProps data={data.structural_property} />
            </GridCol>
        </Grid>
        <LogD data={data.logD}/>
        <Solubility data={data.solubility}/>
    </Container>
}

export {MoleculeView}