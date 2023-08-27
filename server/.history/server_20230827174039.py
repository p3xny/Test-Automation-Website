from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import subprocess

from server_setup import APP, BLUEPRINT, API
from models import command_namespace

CORS(APP)
APP.register_blueprint(BLUEPRINT)

def adjust_command(command):
    if command == "run cypress test suite":
        command = "npx cypress run"
    elif command == "run selenium test suite":
        command = "pytest -v"
    elif command == "ls":
        command = "dir"

    return command

def run_cypress_streamed():
    cypress_command = "npx cypress run"
    process = subprocess.Popen(cypress_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)

    for line in iter(process.stdout.readline, ''):
        yield f"data: {line}\n\n"

    process.stdout.close()
    process.wait()

@APP.route('/members')
def members():
  return jsonify({'members': ['member1', 'member2', 'member3']})

@APP.route('/run_tests', methods=['POST'])
def run_tests():
    command = adjust_command(request.json.get('command'))

    if command == "npx cypress run" or command == "run cypress test suite":
        return Response(run_cypress_streamed(), mimetype="text/event-stream")

    try:
        result = subprocess.run(command, shell=True,
                                capture_output=True, text=True)
        
        if result.stdout == "":
            return jsonify({
                'success': False,
                'error': result.stderr
            })
        
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
