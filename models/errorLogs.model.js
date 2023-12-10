const ErrorLogsModel = (sequelize, Sequelize, DataTypes) => {
    const ErrorLogs = sequelize.define(
      "error_logs", // Model name
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        type: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        error_message: {
            type: DataTypes.TEXT, 
            allowNull: true
        },
        payload: {
          type: DataTypes.JSON,
          defaultValue: "",
          allowNull: true
        }
      },
      {
        timestamps: true,
        underscrored: true,
        paranoid: false,
        createdAt: "created_at",
        updatedAt: false,
        deletedAt: false,
        tableName:"error_logs"
      }
    );
  
    return ErrorLogs;
  };
  
  export default ErrorLogsModel;
  