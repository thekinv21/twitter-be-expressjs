import * as dotenv from 'dotenv'
import pg from 'pg'
import { IPgOption } from './shared'

dotenv.config()

export const pgOptions: IPgOption = {
	host: process.env.DB_HOST!,
	port: +process.env.DB_PORT!,
	database: process.env.DB_NAME!,
	user: process.env.DB_USERNAME!,
	password: process.env.DB_PASSWORD!
}

class Pool {
	private _pool: pg.Pool | null = null

	connect(options: IPgOption) {
		this._pool = new pg.Pool(options)
		this._pool.query(
			`ALTER DATABASE "${process.env.DB_NAME}" SET timezone TO 'Europe/Istanbul';`
		)
		return this._pool.query('SELECT 1 + 1;')
	}

	close() {
		if (this._pool) {
			return this._pool.end()
		}
	}

	query(sql: string, params) {
		if (this._pool) {
			return this._pool.query(sql, params)
		} else {
			this._pool = new pg.Pool(pgOptions)
			if (this._pool) {
				return this._pool.query(sql, params)
			}
		}
	}
}

export default new Pool()
