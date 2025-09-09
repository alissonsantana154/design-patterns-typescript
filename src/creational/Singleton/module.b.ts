import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module.a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Larissa', age: 23 });
myDatabaseClassic.add({ name: 'José', age: 50 });
myDatabaseClassic.add({ name: 'Anthony', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
