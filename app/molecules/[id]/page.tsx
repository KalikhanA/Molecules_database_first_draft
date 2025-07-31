import MoleculesAPI from "@/src/shared/api/molecules"
import { MoleculeView } from "@/src/widgets/molecules/molecule/ui/molecule"

const Molecule = async ({ params }: {params: {id: string}}) => {
    const data = await MoleculesAPI.getMoleculeById(params.id)
    return (<div>
        <MoleculeView data={data}/>
    </div>)
}

export default Molecule