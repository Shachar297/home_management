const appDao = require('../dao/app-dao');

async function getAllToBuyItems() {
    return await appDao.getAllToBuyItems();
}

async function getToBuyItemById(itemId) {
    return await appDao.getToBuyItemById(itemId);
}

async function addToBuyItem(item) {
    return await appDao.addToBuyItem(item);
}

async function removeToBuyItem(itemId) {
    return await appDao.removeToBuyItem(itemId);
}

async function getAllCategories() {
    return await appDao.getAllCategories()
}

module.exports = {
    getAllToBuyItems,
    getToBuyItemById,
    addToBuyItem,
    removeToBuyItem,
    getAllCategories
}