const query = require('../services/db');
import {emptyOrRows} from '../helper';

/* export const testdb = async () => {
    connection.connect(function(err: any) {
        if (err) {
        console.error('error connecting: ' + err.stack);
        return;
        }
    
        console.log('connected as id ' + connection.threadId);
    });
    
    connection.query('SELECT id, alert_id FROM events', function(err: any, rows: { solution: any; }[]) {
        if (err) throw err;
        console.log('The solution is: ', rows[0]);
        return rows;
    });
    
    connection.end();
}; */

export async function testDB(){
    const rows = await query(
        'SELECT id, alert_id FROM events'
    );
    const data = emptyOrRows(rows);
  
    return {
      data,
    }
  }
  
module.exports = {
    testDB
  }