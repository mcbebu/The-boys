from flask import Flask, send_file, send_from_directory
import datetime
import pandas as pd
import os
  
x = datetime.datetime.now()
  
app = Flask(__name__)
count = 1
 
#pandas logic 
df = pd.read_csv('./Dataset/warehouse_scans_with_order_details2.csv')
df['scanned_at'] = pd.to_datetime(df['scanned_at'], format='%d/%m/%y %H:%M')

grouped = df.groupby(df['scanned_at'].dt.date)

grouped_counts = grouped['dest_zone_alpha'].value_counts().sort_values()
grouped_counts

for date, data in grouped:
    filename = f"./Dataset/data_{date}.json"
    data_counts = data['dest_zone_alpha'].value_counts().sort_index()
    data_counts_df = pd.DataFrame({'dest_zone_alpha': data_counts.index, 'count': data_counts.values})
    data_counts_df.to_json(filename, orient='records')
    
#path for json

# Route for seeing a data
@app.route('/')
def home():
    return "invalid api call please include datetime"
@app.route('/getdata/<count>')
def get_time(count):
    file_name = f'data_2023-01-{count}.json'
    file_path = os.path.join(os.getcwd(),file_name)
    folder = os.path.join(os.getcwd(), "Dataset/")
    return send_from_directory(os.path.dirname(folder), os.path.basename(file_path))

if __name__ == '__main__':
    app.run(debug=True)