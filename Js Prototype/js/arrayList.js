function ArrayList() {
    List.call(this);
    this.array = [];
    this.size = 0;
    this.str = "";
}

ArrayList.prototype = Object.create(List.prototype);

ArrayList.prototype.pop = function() {
    lastElem = this.array[this.getSize() - 1];
    let a = [];
    for(let i = 0; i < this.getSize() - 1; i++){
        a[i] = this.array[i];
    }
    this.array = a;
    this.setSize(this.getSize() - 1);
    return lastElem;
};
ArrayList.prototype.push = function(value) {
    this.array[this.getSize()] = value;
    this.setSize(this.getSize() + 1);
    return value;
};
ArrayList.prototype.sort = function(f) {
    if(f && (typeof f == "function" )){
        for(let i = 0; i < this.getSize(); i++){
            for(let j = 0; j < this.getSize(); j++){
                if(j === this.getSize() - 1){
                    break;
                }
                if(f(this.array[j], this.array[j+1]) === 1){
                    [this.array[j], this.array[j+1]] = [this.array[j+1], this.array[j]];
                }
            }
        }
    }else{
        for(let i = 0; i < this.getSize(); i++){
            for(let j = 0; j < this.getSize(); j++){
                if(j === this.getSize() - 1){
                    break;
                }if( String(this.array[j]) > String(this.array[j + 1]) ){
                    [this.array[j], this.array[j+1]] = [this.array[j+1], this.array[j]];
                }
            }
        }
    }
};
ArrayList.prototype.clear = function() {
    this.array = [];
    this.setSize(0);
};
ArrayList.prototype.shift = function() {
    firstElem = this.array[0];
    let a = [];
    for(let i = 0; i < this.getSize() - 1; i++){
        a[i] = this.array[i + 1];
    }
    this.array = a;
    this.setSize(this.getSize() - 1);
    return firstElem;
};
ArrayList.prototype.length = function() {
    return this.getSize();
};
ArrayList.prototype.unshift = function(value) {
    let a = [];
    a[0] = value;
    for(let i = 0; i < this.getSize(); i++){
        a[i + 1] = this.array[i];
    }
    this.array = a;
    this.setSize(this.getSize() + 1);
    return value;
};
ArrayList.prototype.toString = function() {
    for(let i = 0; i < this.getSize(); i++){
        //this.str +=this.array[i] + ", ";
        this.setStr(this.getStr() + this.array[i] + ", ");
    }
    //this.str = this.str.substring(0, this.str.length - 2);
    this.setStr(this.getStr().substring(0, this.getStr().length - 2));
    return this.getStr();
};

ArrayList.prototype.getStr = function() {
    return this.str;
};
ArrayList.prototype.setStr = function(value) {
    this.str = value;
};
ArrayList.prototype.getSize = function() {
    return this.size;
};
ArrayList.prototype.setSize = function(value) {
    this.size = value;
};

ArrayList.prototype.map = function(){};
ArrayList.prototype.reverse = function(){};
ArrayList.prototype.reduce = function(){};
