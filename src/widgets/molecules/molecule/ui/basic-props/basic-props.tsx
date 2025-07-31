import { Card, Grid, GridCol, Table, Title } from "@mantine/core"
import { BasicPropsTable } from "./table"
import { BasicPropsChart } from "./chars"

const BasicProps = ({data}: {data: any}) => {
    return <>
    <Title size="lg" mb={30} mt={30}>
        Basic Properties
    </Title>
    <Grid grow>
        <GridCol span={6}>
            <BasicPropsTable data={data}/>
        </GridCol>
        <GridCol span={6}>
            <BasicPropsChart composition={data.composition}/>
        </GridCol>
    </Grid>
    </>
}

export {BasicProps}