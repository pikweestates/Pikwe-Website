import { type SchemaTypeDefinition } from 'sanity'
import { property } from '../schemas/landstatus'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property],
}
