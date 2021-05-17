from flask import Blueprint, jsonify, request
from sqlalchemy import asc

from flask_api.models import University, db
from flask_api.utils import university_serializer, generate_response

universities = Blueprint('universities', __name__)


@universities.route('/universities/', methods=['GET'])
def list_all_universities():
    return jsonify([*map(university_serializer, University.query.all())])


@universities.route('/universities/search/', methods=['GET'])
def search_university():
    university_name = request.args.get('name')
    filter_val = request.args.get('sort_by')
    results = University.query.filter(University.name.like(('%'+university_name+'%')))\
        .order_by(asc(getattr(University, filter_val))).all()
    return jsonify([*map(university_serializer, results)])


@universities.route('/universities/<int:university_id>', methods=['GET'])
def get_university(university_id):
    university = University.query.filter_by(id=university_id).first()
    if not university:
        return generate_response(404, 'Task not found.')

    return jsonify(university_serializer(university))


@universities.route('/universities/', methods=['POST'])
def add_university():
    post_data = request.get_json()
    if not post_data:
        return generate_response(400, 'Invalid payload.' + str(post_data) + '!')

    alpha_two_code = post_data.get("alpha_two_code")
    country = post_data.get("country")
    domain = post_data.get("domain")
    name = post_data.get("name")
    web_page = post_data.get("web_page")
    university = University(alpha_two_code=alpha_two_code,country=country,domain=domain,name=name,web_page=web_page)
    db.session.add(university)
    db.session.commit()

    return generate_response(201, 'Task added.', university_serializer(university))


@universities.route('/universities/<int:university_id>', methods=['PUT'])
def update_university(university_id):
    university = University.query.filter_by(id=university_id).first()
    if not university:
        return generate_response(404, 'Task not found.')

    post_data = request.get_json()
    if not post_data:
        return generate_response(400, 'Invalid payload.')

    university.alpha_two_code = post_data.get('alpha_two_code')
    university.country = post_data.get('country')
    university.domain = post_data.get('domain')
    university.name = post_data.get('name')
    university.web_page = post_data.get('web_page')
    db.session.commit()

    return generate_response(200, 'Task updated.', university_serializer(university))


@universities.route('/universities/<int:university_id>', methods=['DELETE'])
def delete_university(university_id):
    university = University.query.filter_by(id=university_id).first()
    if not university:
        return generate_response(404, 'Task not found.')

    db.session.delete(university)
    db.session.commit()
    return generate_response(200, 'Task deleted.')
