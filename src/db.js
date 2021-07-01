import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);
db.transaction(function (txn) {
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS CID(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS EARFCN(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS PLMN(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS TAC(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS LAC(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS NETWORK(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
});

export function removeAllData() {
  db.transaction(function (txn) {
    txn.executeSql('DELETE FROM CID', []);
    txn.executeSql('DELETE FROM EARFCN', []);
    txn.executeSql('DELETE FROM PLMN', []);
    txn.executeSql('DELETE FROM TAC', []);
    txn.executeSql('DELETE FROM LAC', []);
    txn.executeSql('DELETE FROM NETWORK', []);
  });
}

// -------------------------------------------------------------------------------
// CID ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setCID(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO CID (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
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

export function getCIDById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `CID` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// EARFCN ------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setEARFCN(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO EARFCN (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllEARFCN(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `EARFCN`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getEARFCNById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `EARFCN` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// PLMN --------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setPLMN(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO PLMN (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllPLMN(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `PLMN`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getPLMNById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `PLMN` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// TAC ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setTAC(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO TAC (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllTAC(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `TAC`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getTACById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `TAC` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// LAC ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setLAC(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO LAC (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllLAC(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `LAC`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getLACById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `LAC` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// NETWORK -----------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setNETWORK(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO NETWORK (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllNETWORK(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `NETWORK`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getNETWORKById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `NETWORK` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
//   txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
//   txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
//     for (let i = 0; i < res.rows.length; ++i) {
//       console.log('item:', res.rows.item(i));
//     }
//   });
