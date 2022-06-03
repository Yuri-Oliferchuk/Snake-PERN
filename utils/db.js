import 'dotenv/config';
import pg from 'pg';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL || connectionString,
  ssl: true,
})

export const getHighScore = async () => {
    let sql = "SELECT * FROM score ORDER BY high_score DESC LIMIT 10;";
    const result = await pool.query(sql);
    return result.rows;
  };

export const postHighScore = async (username, score) => {
    let sql = "INSERT INTO score (username, high_score) VALUES ($1, $2);";
    await pool.query(sql, [username, score]);
  };