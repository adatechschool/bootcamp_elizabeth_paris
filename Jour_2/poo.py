class Employee:
    def __init__(self, rank, isFree=True):
        self.rank = rank
        self.isFree = isFree

    def handleCall(self):
        if self.isFree:
            self.isFree = False
            return True
        else:
            return False

    def getName(self):
        return type(self).__name__


class Respondent(Employee):
    def __init__(self, isFree=True):
        super().__init__(0, isFree)


class Manager(Employee):
    def __init__(self, isFree=True):
        super().__init__(1, isFree)


class Director(Employee):
    def __init__(self, isFree=True):
        super().__init__(2, isFree)


class CallCenter():
    def __init__(self):
        self.queue = ['call1', 'call2', 'call3']
        self.employees = [Respondent(), Respondent(), Manager(), Director()]

    def dispatchCall(self):
        while self.queue:
            call = self.queue.pop(0)
            handled = False

            for rank in range(3):
                for employee in self.employees:
                    if employee.rank == rank and employee.handleCall():
                        print(f"{call} handle by {employee.getName()}")
                        handled = True
                        break
                if handled:
                    break
            if not handled:
                print("all busy")

        print("empty queue")
        return


center = CallCenter()
center.dispatchCall()
