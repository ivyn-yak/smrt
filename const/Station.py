class Station:
    def __init__(self, code, name, chiName, line, chiLine):
        self.code = code
        self.name = name
        self.chiName = chiName
        self.line = line
        self.chiLine = chiLine

    def getCode(self):
        return self.code

    def getName(self):
        return self.name    

    def getChiName(self):
        return self.chiName

    def getLine(self):
        return self.line

    def getChiLine(self):
        return self.chiLine