
from flask import Flask, render_template, flash, redirect, url_for, session, request, logging
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators, SelectField
from passlib.hash import sha256_crypt
from functools import wraps
from flask_uploads import UploadSet, configure_uploads, IMAGES
import timeit
import datetime
from flask_mail import Mail, Message
import os
from wtforms.fields.html5 import EmailField
from flask_pymongo import PyMongo
import json
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)


URL = 'https://www.way2sms.com/api/v1/sendCampaign'


app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config["MONGO_URI"]='mongodb+srv://ishu:22@cluster0.fpscj.mongodb.net/Shopically?retryWrites=true&w=majority'
mongo = PyMongo(app)
jwt = JWTManager(app)
database=mongo.db




# get request
def sendPostRequest(reqUrl, apiKey, secretKey, useType, phoneNo, senderId, textMessage):
  req_params = {
  'apikey':apiKey,
  'secret':secretKey,
  'usetype':useType,
  'phone': phoneNo,
  'message':textMessage,
  'senderid':senderId
  }
  return requests.post(reqUrl, req_params)

otp=''
@app.route("/register",methods=['POST','GET'])
def register():
	global otp
	fields=['name','email','mobile','password','address']
	data=request.get_json()
	dic={}
	
	dic['register']=datetime.datetime.now().strftime("%y-%m-%d %H:%M:%S")
	for field in fields:
		dic[field]=data.get(field)
	if request.method=='POST':
		if data.get('type')=='Shop Owner':
			ida=database.Shops.count()
			dic['_id']=ida+1
			session['dic']=dic
			session['types']='Shop'
			#database.Shops.insert_one(dic)
		else:
			ida=database.Costumers.count()
			dic['_id']=ida+1
			session['dic']=dic
			session['types']='Cost'
			#database.Costumers.insert_one(dic)
		otp='2345'
		response = sendPostRequest(URL, '0BYLMANZ8XRSC9O6NO6OFPFTDN5QBC33', '9T0RJX1A6334A7HY', 'stage', str(dic['mobile']), '987604492',otp )
		flash('An otp is send to your mobile', 'success')
		return render_template('otp.html')
	else:
		return 'error: can not register'




@app.route("/profile/<string:username>")
def profile(username):
	if ('uid' in session) and ('type' in session):
		if session['type']=='Shop Owner':
			collection=database.Shops
		else:
			collection=database.Costumers
			
		result=collection.find({'_id':session['uid'],'username':username})
		if result.cont()==1:
			return render('profile.html',data=result[0])
		else:
			flash('danger')
			return redirect('/')
	else:
		return render_template('/login')



@app.route("/login",methods=['POST','GET'])
def login():
	if not ( ('uid' in session) and ('type' in session)):
		fields=['name','address','register']
		dic={}
		data=request.get_json()
		types=data.get('type')
		print(types)
		if data.get('type')=='Shop Owner':
			collection=database.Shops
		else:
			collection=database.Costumers

		results=collection.find({'email':data.get('email'),'password':data.get('password')})
		if results.count()==1:
			products=[]
			orders=[]
			#session['uid']=results[0]['_id']
			session['type']=types
			if types=='Shop Owner':
				session['shopcode']=results[0]['code']
				obj=database.Products.find({'shopcode':results[0]['code'] })
				orj=database.Orders.find({'shopcode':results[0]['code'] })
				for objs in obj:
					products.append(objs)

				for orjs in orj:
					orders.append(orjs)
				
				dic['products']=products
				dic['orders']=orders
			else:
				orj=database.Orders.find({'ofname':data.get('email') })
				obj=database.Products.find({})
				for objs in obj:
					objs['_id']=''
					products.append(objs)
				for orjs in orj:
					orjs['_id']=''
					orders.append(orjs)
				dic['products']=products
				dic['orders']=orders

			for field in fields:
				dic[field]=results[0][field]
			access_token = create_access_token(identity = {'data':dic,'types':types})
			return access_token
			#return render_template('index.html',data=dic,types=types)
		else:
			flash('check username and password')
			return render_template('login.html')
	else:
		return render_template('login.html')



@app.route('/out')
def logout():
	session.clear()
	flash('You are logged out', 'success')
	return render_template('index.html',data={},types='')



@app.route('/otp',methods=['POST'])
def otp():
	global otp
	data=request.get_json()
	if otp==data['otp']:
		if session['types']=='Shop':
			database.Shops.insert_one(session['dic'])
		else:
			database.Costumers.insert_one(dic)
		flash('Registered','success')
		session.clear()
		return render_template('/login')
	else:
		session.clear()
		return render_template('register.html')
			















'''def register():
    
    form=request.get_json()
    fields=['name','email','password','address','regiserdate']
    if request.method=='POST':
    	if form.get('type')=='Shop Owner':
    		table=database.shops



'''

if __name__ == '__main__':
    app.run(debug=True)