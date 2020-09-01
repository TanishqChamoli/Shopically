from pymongo import MongoClient
database = MongoClient('mongodb+srv://ishu:22@cluster0.fpscj.mongodb.net/Shopically?retryWrites=true&w=majority')





db=database['Shopically']


result=db['Products'].find({'count':2})

for i in result:
	print(i)
