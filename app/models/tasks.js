module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("users", {
        name: {
            type: Sequelize.STRING
        }
      
    });

    return Task;
};
