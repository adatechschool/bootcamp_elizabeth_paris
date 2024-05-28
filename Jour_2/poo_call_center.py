# Création d'une class "person"

class SocietyMember:
    
    def __init__(self, name, fonction, disponibility):
        self.name = name
        self.fonction = fonction
        self.disponibility = disponibility

respondent1 = SocietyMember("Olivier", 2, True)
respondent2 = SocietyMember("Nicolas", 2, False)
respondent3 = SocietyMember("Aurélie", 2, True)
manager1 = SocietyMember("Jislène", 1, False)
manager2 = SocietyMember("Marie", 1, False)
director = SocietyMember("Lisa", 0, True)

# Liste pour stocker les instances
members_list = [respondent1, respondent2, respondent3, manager1, manager2, director]
#print(members_list)

nbOfcall = 6

def  dispatchCall(members):
    for member in sorted(members, reverse=True):
        if member.disponibility:
            return member
    return None


def callManagement(call):



    