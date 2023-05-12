import {Database} from '../database/database.js';

const db = new Database();

export class UseController{
    select(table, search){
        let data = db.database[table] ?? [];

        if(search){
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase());
                })
            })
        }
        return data
    }

    insert(table, data){
        if(Array.isArray(db.database[table])){
            db.database[table].push(data)
        }else{
            db.database[table] = [data]
        }

        db.persist();
        return data;

    }

    update(table, id, data){
        const rowIndex = db.database[table].findIndex(row =>row.id ===id)

        if(rowIndex > -1){
            db.database[table][rowIndex] = {id, ...data}
            db.persist();

        }
    }

    delete(table, id){
        const rowIndex = db.database[table].findIndex(row =>row.id ===id)

        if(rowIndex > -1){
            db.database[table].splice(rowIndex, 1)
            db.persist();

        }
    }
}