const connectionWrapper = require("./connection-wrapper");


async function getAllToBuyItems() {
    const
        sql = `SELECT 
            b.id, b.name, b.quantity,
            c.id as categoryId, c.name as categoryName
            FROM buy_items b, categories c
            WHERE c.id = b.category_id`;

    try {
        const dbResponse = await connectionWrapper.execute(sql);
        return dbResponse
    } catch (error) {
        throw new Error(error)
    }


}

async function getToBuyItemById(itemId) {
    const
        sql = ``,
        parameters = [itemId];
    try {
        const dbResponse = await connectionWrapper.executeWithParameters(sql, parameters);
        return dbResponse
    } catch (error) {
        throw new Error(error)
    }
}

async function addToBuyItem(item) {
    console.log(typeof item.quantity)
    const
        sql = `INSERT INTO 
                buy_items (name, quantity, category_id)
                VALUES (?,?,?)`,
        parameters = [item.name.toString(), parseInt(item.quantity), parseInt(item.categoryId)];
    try {
        const dbResponse = await connectionWrapper.executeWithParameters(sql, parameters);
        return dbResponse
    } catch (error) {
        throw new Error(error)
    }
}

async function removeToBuyItem(itemId) {
    const
        sql = `DELETE FROM buy_items WHERE id = ?`,
        parameters = [itemId];
    try {
        const dbResponse = await connectionWrapper.executeWithParameters(sql, parameters);
        return dbResponse
    } catch (error) {
        throw new Error(error)
    }
}


async function getAllCategories() {

    const
        sql = `SELECT * FROM categories`;

    try {
        const dbResponse = await connectionWrapper.execute(sql);
        return dbResponse
    } catch (error) {
        throw new Error(error)
    }

}


module.exports = {
    getAllToBuyItems,
    getToBuyItemById,
    addToBuyItem,
    removeToBuyItem,
    getAllCategories
}