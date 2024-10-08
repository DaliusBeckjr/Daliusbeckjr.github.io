from flask import Flask, render_template
from http import HTTPStatus



def create_app():
    app = Flask(__name__)

    @app.route("/", methods = ["GET"])
    def home():
        return render_template('home.html')

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=8080)