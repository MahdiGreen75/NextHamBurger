import sql from 'better-sqlite3';

const db = sql('meals.db');

export default async function getMeals() {
    // Manullay delaying 2 sec for simulating a remote db access through server.
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    // throw new Error();
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
    // await new Promise((resolve)=>setTimeout(resolve, 5000));
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}