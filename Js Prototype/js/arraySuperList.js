function ArraySuperList() {
    ArrayList.call(this);
}

ArraySuperList.prototype = Object.create(ArrayList.prototype);
ArraySuperList.prototype.constructor = ArraySuperList;

ArraySuperList.prototype.map = function(f) {
    let arraylist = new ArraySuperList();
    for(let index = 0; index < this.getSize(); index++){
        arraylist.push(f(this.array[index], index, this.array));
    }
    return arraylist;
};
ArraySuperList.prototype.reduce = function(f) {
    let result = 0;
    for(let index = 0; index < this.getSize(); index++) {
        result = (f(this.array[0], this.array[index], index, this.array));
    }
    return result;
};
ArraySuperList.prototype.reverse = function(array) {
    for(let i = 0, j = this.getSize() - 1; i < (this.getSize() - 1)/2; i++, j--){
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
    return this.array;
};
