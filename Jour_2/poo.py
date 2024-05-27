class Employee :
    def __init__(self, isFree=True):
        self.isFree = isFree



class Respondent(Employee) :
    def handleCall(self):
        if self.isFree:
            self.isFree = False
            return True
        else:
            return False
    
    

class Manager(Employee) :
    def handleCall(self):
        if self.isFree:
            self.isFree = False
            return True
        else:
            return False


class Director(Employee) :
    def handleCall(self):
        if self.isFree:
            self.isFree = False
            return True
        else:
            return False


class CallCenter() :
    def __init__(self):
        self.respondents = [Respondent(False),Respondent(False)]
        self.managers = [Manager(False),Manager(False)]
        self.directors = [Director(False),Director(False)]

    def dispatchCall(self) :
        for r in self.respondents:
            if r.handleCall():
                print("Handling by respondent")
                return 
            
        for m in self.managers:
            if m.handleCall():
                print("Handling by manager")
                return
            
        for d in self.directors:
            if d.handleCall():
                print("Handling by director")
                return
            
        print("all busy")


center = CallCenter()
center.dispatchCall()