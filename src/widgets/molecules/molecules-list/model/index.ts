import MoleculesAPI from "@/src/shared/api/molecules";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

type MoleculesProps = {
    page?: number
}

const MoleculesGate = createGate<MoleculesProps>()

const getMolecules = createEvent<MoleculesProps>()

const fetchMoleculesFx = createEffect<MoleculesProps, any[]>()

const $molecules = createStore<any[]>([])

fetchMoleculesFx.use(async ({page}: MoleculesProps) => {
    if (!page)
        page = 1

    const res = await MoleculesAPI.getMolecules({page})

    return res
})

sample({
    clock: MoleculesGate.open,
    target: fetchMoleculesFx
})

sample({
    clock: fetchMoleculesFx.doneData,
    target: $molecules
})

export {
    $molecules,
    getMolecules,
    MoleculesGate,
}