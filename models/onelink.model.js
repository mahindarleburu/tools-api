import config from "../utils/config.js";
const ShortUrlModel = (sequelize, Sequelize, DataTypes) => {
  const ShortUrl = sequelize.define(
    "onelink", // Model name
    {
      onelink_code: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        defaultValue: "Name",
        allowNull: false,
      },
      long_url: {
        type: DataTypes.TEXT,
        defaultValue: "",
      },
      user_id: {
        type: DataTypes.STRING,
      },
      platform: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull:true
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "shorturl",
        allowNull:false
      },
      meta: {
        type: DataTypes.JSON,
        defaultValue: null,
        allowNull:true
      },
      onelink: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${config.baseUrl}${this.onelink_code}`;
        },
      },
      src: {
        type: DataTypes.VIRTUAL,
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
      tableName: "onelink",
    }
  );

  return ShortUrl;
};

export default ShortUrlModel;
