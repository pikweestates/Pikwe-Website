import { type SchemaTypeDefinition } from 'sanity'
import { landstatus } from '../schemas/landstatus'
import { property } from '../schemas/property'
import { category } from '../schemas/category'
import { blogpost } from '../schemas/blogpost'
import { team } from '../schemas/team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landstatus, category, property, blogpost ],
}
