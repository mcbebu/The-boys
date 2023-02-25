from flask import Flask
import datetime
  
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
@app.route('/')
def home():
    return "invalid api call please include datetime"
@app.route('/<day>')
def get_time(day):
    if int(day) < 3: 
        return "hello" 
    elif int(day) >= 3:
        return "bye"

    
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)