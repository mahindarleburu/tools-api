const EventLogsModel = (sequelize, Sequelize, DataTypes) => {
  const EventLogs = sequelize.define(
    "event_logs", // Model name
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_email: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      platform: {
        type: DataTypes.STRING,
        defaultValue: "", // CAP/Tools
        allowNull: false
      },
      module: {
        type: DataTypes.STRING,
        defaultValue: "", // CAP/UTM/QR CODE
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING,
        defaultValue: "", // CURD create/update/delete
        allowNull: false,
      },
      meta: {
        type: DataTypes.JSON,
        defaultValue: "",
        allowNull:false
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
      tableName:"event_logs"
    }
  );

  return EventLogs;
};

export default EventLogsModel;
