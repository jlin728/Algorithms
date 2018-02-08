import datetime

def coinChanger (cents):
    my_dict = {}
    quarters = cents/25
    my_dict ["Quarters"]=quarters
    cents = cents %25
    dimes = cents/10
    my_dict["Dimes"]=dimes
    cents = cents%10
    nickles = cents/5
    my_dict["Nickles"]=nickles
    cents = cents%5
    my_dict["Cents"]=cents
    return my_dict

print datetime.datetime.now()
print coinChanger(124)
print datetime.datetime.now()