import { type SchemaTypeDefinition } from 'sanity'
import { landstatus } from '../schemas/landstatus'
import { property } from '../schemas/property'
import Cate

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landstatus, property],
}
