import MoleculesAPI from "@/src/shared/api/molecules";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

type MoleculeProps = {
    id: string
}

const MoleculeGate = createGate<MoleculeProps>()

const fetchMoleculesFx = createEffect<MoleculeProps, any[]>()

const $molecule = createStore<any>(null)

fetchMoleculesFx.use(async ({id}: MoleculeProps) => {
    const res = await MoleculesAPI.getMoleculeById(id)

    return res
})

sample({
    clock: MoleculeGate.open,
    target: fetchMoleculesFx
})

sample({
    clock: fetchMoleculesFx.doneData,
    target: $molecule
})

export {
    $molecule,
    MoleculeGate,
}