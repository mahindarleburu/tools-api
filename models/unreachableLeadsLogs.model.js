const UnreachableLeadsLogsModel = (sequelize, Sequelize, DataTypes) => {
    const UnreachableLeadsLogs = sequelize.define(
      "unreachable_leads_logs", // Model name
      {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        env: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        scheduled_at: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        unique_id: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
        meta: {
            type: DataTypes.JSON,
            defaultValue: null,
            allowNull:true
        },
        api_response: {
            type: DataTypes.JSON,
            defaultValue: null,
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
        tableName:"unreachable_leads_logs"
      }
    );
  
    return UnreachableLeadsLogs;
  };
  
  export default UnreachableLeadsLogsModel;
  