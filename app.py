from flask import Flask, request, render_template, redirect, jsonify
import os
import re

app = Flask(__name__)

@app.route('/') #methods=['POST']
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()  # Get JSON data from the request
        username = data.get("username")
        password = data.get("password")

        if username and password:
            search_string = f'name: "{username}", pass: {password}'
            with open('static/accounts/note.txt', 'r') as note_file:
                lines = note_file.readlines()
                for line in lines:
                    if re.search(rf'\b{re.escape(search_string)}\b', line):
                        return jsonify({'message': "Login successful"}), 200

            # If the loop completes without finding a match
            return jsonify({'message': 'Invalid login or password'}), 401
        else:
            return jsonify({'message': 'Invalid login or password'}), 400
    except Exception as e:
        return jsonify({'message': str(e)}), 500
    

if __name__ == '__main__':
    app.run(debug=True, port=8001)