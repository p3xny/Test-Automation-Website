from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

from server_setup import APP, BLUEPRINT, API
from models import command_namespace

CORS(APP)
APP.register_blueprint(BLUEPRINT)

@APP.route('/members')
def members():
  return jsonify({'members': ['member1', 'member2', 'member3']})

@APP.route('/run_tests', methods=['POST'])
def run_tests():
    command = request.json.get('command')
    if command == "run cypress test suite":
        command = "npm run cypress:run"
    if command == "run selenium test suite":
        command = "python3 -m pytest -v -s"

    try:
        result = subprocess.run(command, shell=True,
                                capture_output=True, text=True)
        return jsonify({
            'success': True,
            'output': result.stdout,
            'error': result.stderr,
        })

    except Exception as error:
        return jsonify({
            'success': False,
            'error': str(error)
        })

  
API.add_namespace(command_namespace)
    
if __name__ == '__main__':
  APP.run(debug=True, host='127.0.0.1', port=5000)
