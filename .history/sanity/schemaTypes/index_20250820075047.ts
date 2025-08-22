import { type SchemaTypeDefinition } from 'sanity'
import { landstatus } from '../schemas/landstatus'
import { property } from '../schemas/property'
import { category } from '../schemas/category'
import Blo

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landstatus, property],
}
