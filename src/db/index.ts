
import * as schema from '../schemas/schemas'

import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const sql = postgres(process.env.DATABASE_URL??"", );

export const db = drizzle(sql, {schema});