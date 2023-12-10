const OneLinkActivityModel = (sequelize, Sequelize, DataTypes) => {
  const OneLinkActivity = sequelize.define(
    "onelink_activity", // Model name
    {
      audit_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      onelink_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_agent: {
        type: DataTypes.TEXT,
        defaultValue: "",
      },
      browser_name: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      browser_version: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      engine_name: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      engine_version: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      os_name: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      os_version: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      device_model: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      device_type: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      device_vendor: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      cpu_architecture: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: 'deleted_at',
      tableName:"onelink_activity"
    }
  );

  return OneLinkActivity;
};

export default OneLinkActivityModel;
