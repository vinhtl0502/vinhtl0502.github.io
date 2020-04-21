function cat() {
    this.stomach=name;
    this.dead=false;
}

CaretPosition.prototype.eat=function (mouse){
    this.stomach.push(mouse);
};
mouse.prototype.die=function () {
    this.dead=true;
}
module.exports=cat;