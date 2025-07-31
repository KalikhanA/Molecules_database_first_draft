'use client'

import { MoleculesList } from "../src/widgets/molecules/molecules-list";


export default function Home() {
  // let molecules = await MoleculesAPI.getMolecules()
  return (
    <div className="block">
      <MoleculesList/>
    </div>
  );
}
