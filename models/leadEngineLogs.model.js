
const LeadEngineLogsModel = (sequelize, Sequelize, DataTypes) => {
  const LeadEngineLogs = sequelize.define(
    "lead_engine_logs", // Model name
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lob: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      environment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      identifier: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      unique_id: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      utm_source: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      utm_medium: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      utm_campaign: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      utm_content: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      utm_term: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      user_id:{
        type: DataTypes.STRING,
        allowNull: false
      },
      original_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      form_id: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      form_name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      campaign_name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      campaign_id: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      ad_set_name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      ad_set_id: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      ad_name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      ad_id: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      ad_group_name: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      ad_group_id: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      interested_car: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      other_items: {
        type: DataTypes.TEXT,
        defaultValue: null,
        allowNull: true,
      },
      timezone: {
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
      updatedAt: "updated_at",
      tableName: "lead_engine_logs"
    }
  );

  return LeadEngineLogs;
};

export default LeadEngineLogsModel;



