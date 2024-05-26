class Station {
    constructor(code, name, chiName, line, chiLine) {
      this.code = code;
      this.name = name;
      this.chiName = chiName;
      this.line = line;
      this.chiLine = chiLine;
    }

    getCode() {
      return this.code;
    }

    getName() {
      return this.name;
    }
  
    getChiName() {
      return this.chiName;
    }
  
    getLine() {
      return this.line;
    }
  
    getChiLine() {
      return this.chiLine;
    }
  }

  module.exports = Station;
