# app.py
import Flask, request, jsonify
import PyMongo
import CORS
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Initialize PyMongo and CORS
mongo = PyMongo(app)
CORS(app)

# Profile collection
profile_collection = mongo.db.profiles

@app.route('/api/profile', methods=['POST'])
def create_profile():
    data = request.json
    
    # Basic validation for password matching
    if data['newPassword'] != data['confirmPassword']:
        return jsonify({'error': 'Passwords do not match'}), 400

    # Insert the profile into MongoDB
    try:
        profile_collection.insert_one({
            "firstName": data['firstName'],
            "middleName": data['middleName'],
            "lastName": data['lastName'],
            "email": data['email'],
            "dob": data['dob'],
            "subjectOfExpertise": data['subjectOfExpertise'],
            "address": data['address'],
            "pincode": data['pincode'],
            "contactNumber": data['contactNumber'],
            "managedClasses": data['managedClasses'],
            "city": data['city'],
            "state": data['state'],
            "newPassword": data['newPassword']
        })
        return jsonify({'message': 'Profile created successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
