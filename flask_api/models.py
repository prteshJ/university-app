from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class University(db.Model):
    __tablename__ = 'university'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    alpha_two_code = db.Column(db.String(2), nullable=False)
    country = db.Column(db.String(56), nullable=False)
    domain = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    web_page = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return "name: " + self.name + "\n" + "country: " + self.country
