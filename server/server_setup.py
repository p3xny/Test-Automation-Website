from flask import Flask, Blueprint
from flask_restx import Api

APP = Flask(__name__)
BLUEPRINT = Blueprint('api', __name__, url_prefix='/')
API = Api(BLUEPRINT)