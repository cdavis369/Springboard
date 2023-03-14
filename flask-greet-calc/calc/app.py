from flask import Flask, request
from operations import *

app = Flask(__name__)

@app.route('/')
def home_page():
  op = request
  return "Calculator"

@app.route('/add')
def addition():
  a = int(request.args['a'])
  b = int(request.args['b'])
  return str(add(a, b))

@app.route('/sub')
def subtract():
  a = int(request.args['a'])
  b = int(request.args['b'])
  return str(sub(a, b))

@app.route('/mult')
def multiply():
  a = int(request.args['a'])
  b = int(request.args['b'])
  return str(mult(a, b))

@app.route('/div')
def divide():
  a = int(request.args['a'])
  b = int(request.args['b'])
  return str(div(a, b))

@app.route('/math/<operation>')
def math(operation):
  if operation == 'add':
    return addition()
  elif operation == 'sub':
    return subtract()
  elif operation == 'mult':
    return multiply()
  elif operation == 'div':
    return divide()