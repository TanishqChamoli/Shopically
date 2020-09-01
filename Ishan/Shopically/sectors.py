import json


def read(f):
	n = open('data.json',)
	data=json.load(n)
	return data[str(f)]