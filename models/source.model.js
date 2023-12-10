import { convertLowercaseUnderscore } from "../utils/functions.js";

const UtmSourceModel = (sequelize, Sequelize, DataTypes) => {
  const UtmSource = sequelize.define(
    "utm_source", // Model name
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      display_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set(value) {
          const convertName = convertLowercaseUnderscore(value);
          this.setDataValue("display_name", value);
          this.setDataValue("name", convertName);
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "utm_source",
    }
  );

  return UtmSource;
};

export default UtmSourceModel;
