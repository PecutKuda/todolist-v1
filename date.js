//exports agar function dapat dipakai public 

//tidak boleh pakai () kalau mau module.exports
//menambahkan .getDay untuk specify function mana yang mau di export
exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", options);
}