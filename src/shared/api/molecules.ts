import { getMolecules } from "@/src/widgets/molecules/molecules-list"
import { instance } from "."

const MoleculesAPI = {
    getMolecules: async ({page}: {page: number}) => {
        return await instance
            .get<any[]>(`molecules?page=${page}`)
            .then((res) => res.data)
    },
    getMoleculeById: async (id: string) => {
        return await instance
            .get<any[]>(`molecules/${id}`)
            .then((res) => res.data)
    }
}

export default MoleculesAPI