import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Low, JSONFile } from 'lowdb'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
    const __dirname = dirname(fileURLToPath(import.meta.url))

    // Use JSON file for storage
    const file = join(__dirname, '..', 'lib', 'database', 'index.json')

    const adapter = new JSONFile(file)
    const db = new Low(adapter)
    await db.read()

    db.data ||= { lists: [] }

    const { lists, listItems } = db.data

    if (lists.length) {
        return { lists }
    }

    throw error(404, 'Not found')
}
