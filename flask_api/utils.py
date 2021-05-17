from flask import jsonify


def university_serializer(university):
    """ Serialize a University object to a dict """
    university_dict = {'id': university.id, 'alpha_two_code': university.alpha_two_code, 'country': university.country,
                       'domain': university.domain, 'name': university.name, 'web_page': university.web_page
                       }
    return university_dict


def generate_response(code, message, university=None):
    """ Generate a Flask response with a json payload and HTTP code  """
    if university:
        return jsonify({'code': code, 'message': message, 'university': university}), code
    return jsonify({'code': code, 'message': message}), code
