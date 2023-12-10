import db from "./index.js";

const UtmMediumSourceMapping = (sequelize, Sequelize, DataTypes) => {
  const UtmMedium = sequelize.define(
    "utm_source_medium_mapping", // Model name
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: 'deleted_at',
      tableName:"utm_source_medium_mapping"
    }
  );

  return UtmMedium;
};

export default UtmMediumSourceMapping;
