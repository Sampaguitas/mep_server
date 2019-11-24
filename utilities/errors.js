
const Errors = {
    //00**: "General Errors",
    "0000": "Unauthorized",
    "0001": "Something went wrong",
    //01**: "Item Errors",
    "0100": "Item already exists",
    "0101": "Item could not be found",
    "0102": "Item successfully created",
    "0103": "Item could not be created",
    "0104": "Item successfully updated",
    "0105": "Item could not be updated",
    "0106": "Item successfully deleted",
    "0107": "Item could not be deleted",
    "0108": "Item could not be updated",
}

module.exports = function generateError(ErrCode) {
    return new Error(Errors[ErrCode]);
}