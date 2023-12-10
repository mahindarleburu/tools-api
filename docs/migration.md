
# Migration Docs

We are using sequalize for database connection. so we are using sequalize-cli for migration process


## Installation

To install the Sequelize CLI:

```bash
  npm install --save-dev sequelize-cli

```
    
# Running Migrations

Until this step, we haven't inserted anything into the database. We have just created the required model and migration files for our first model, User. Now to actually create that table in the database you need to run db:migrate command.
## Rename column

[Documentation](https://stackoverflow.com/questions/47755293/sequelize-rename-column-with-index-constraint)

You have to drop all the constraints, rename the column and then add the constraints back. With a single constraint on totoId it would look something like this:
```bash
// 1) drop constraint
queryInterface.removeConstraint('my_some_table', 'my_constraint');

// 2) rename column
queryInterface.renameColumn('my_some_table', 'totoId', 'toto_id');

// 3) add constraint back
queryInterface.addConstraint('my_some_table', ['toto_id'], {
    type: 'unique',
    name: 'my_constraint'
});

```

Remember that migrations should be atomic operations. So you should create 3 migrations in that order. Or even better, you could create a transaction. This will prevent from any change to be applied if one of the queries fails:

```bash
return queryInterface.sequelize.transaction(async (transaction) => {
  await queryInterface.removeConstraint("my_some_table", "my_constraint", {
    transaction,
  });
  await queryInterface.renameColumn("my_some_table", "totoId", "toto_id", {
    transaction,
  });
  await queryInterface.addConstraint("my_some_table", ["toto_id"], {
    type: "unique",
    name: "my_constraint",
    transaction,
  });
});

```
## Create table

You have to drop all the constraints, rename the column and then add the constraints back. With a single constraint on totoId it would look something like this:
```bash
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};

```

## Add Column

The following is an example of a migration that performs two changes in the database, using an automatically-managed transaction to ensure that all instructions are successfully executed or rolled back in case of failure:
```bash
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Person', 'petName', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Person', 'favoriteColor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Person', 'petName', { transaction: t }),
        queryInterface.removeColumn('Person', 'favoriteColor', { transaction: t })
      ]);
    });
  }
};

```