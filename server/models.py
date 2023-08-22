from flask_restx import Namespace, Resource, fields

from server_setup import API

command_namespace = Namespace('command', description='Enter commands to run')

command_model = command_namespace.model('Command', {
    'command': fields.String(required=True, descirption='Command to run')
})

@command_namespace.route('/')
class Command(Resource):
    @command_namespace.expect(command_model)
    def post(self):
        command = API.payload.get('command')
        return {'message': command}