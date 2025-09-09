import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Álisson', age: 23 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Tom', age: 25 });

export { myDatabaseClassic };
