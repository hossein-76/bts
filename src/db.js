import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);
db.transaction(function (txn) {
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS CID(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
});

export function setCID(lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO CID (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [new Date().getTime(), lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllCID(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `CID`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

// txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
//   txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
//   txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
//     for (let i = 0; i < res.rows.length; ++i) {
//       console.log('item:', res.rows.item(i));
//     }
//   });
