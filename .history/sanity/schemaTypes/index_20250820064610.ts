import { type SchemaTypeDefinition } from 'sanity'
import { landstatus } from '../schemas/landstatus'
import { property } from '../schemas/property'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landstatus],
}
