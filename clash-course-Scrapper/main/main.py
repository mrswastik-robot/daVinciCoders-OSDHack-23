from flask import Flask, render_template
import scratch_2

app = Flask(__name__)


@app.route("/")  # this sets the route to this page
def home():
    return "<h1>Nothing to show</h1>"


@app.route("/script")
def scr():
    data = scratch_2.scrapUdemy()
    return data


if __name__ == "__main__":
    app.run(debug=True)
