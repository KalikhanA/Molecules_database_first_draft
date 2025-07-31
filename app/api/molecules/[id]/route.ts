import clientPromise from '@/src/shared/lib';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
 
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1] as string;

    const client = await clientPromise;
    const db = client.db('molecule-base')

    const molecule = await db.collection('molecule')
      .findOne({_id: new ObjectId(id)})

    if (molecule) {
      molecule.geometry = await db.collection('geometry')
        .findOne({molecule_id: id})
      
      molecule.basic_property = await db.collection('basic-property')
        .findOne({molecule_id: id})

      molecule.hnmr = await db.collection('hnmr')
        .findOne({molecule_id: id})

      molecule.isoelectric_point = await db.collection('isoelectric_point')
        .findOne({molecule_id: id})

      molecule.logD = await db.collection('logD')
        .findOne({molecule_id: id})

      molecule.lypophicility = await db.collection('lypophicility')
        .findOne({molecule_id: id})

      molecule.pka = await db.collection('pka')
        .findOne({molecule_id: id})

      molecule.solubility = await db.collection('solubility')
        .findOne({molecule_id: id})

      molecule.structural_property = await db.collection('structural_property')
        .findOne({molecule_id: id})
    }
    return NextResponse.json(molecule)
  } catch (e) {
    return NextResponse.error()
  }
}