import 'dotenv/config'
import pg from 'pg'
import { IPgOptions } from './shared'

export const pgOptions: IPgOptions = {
	host: process.env.DB_HOST!,
	port: +process.env.DB_PORT!,
	database: process.env.DB_NAME!,
	user: process.env.DB_USER!,
	password: process.env.DB_PASSWORD!
}

class Pool {
	private _pool: pg.Pool | null = null

	connect(options: {
		host: string
		port: number
		database: string
		user: string
		password: string
	}) {
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
