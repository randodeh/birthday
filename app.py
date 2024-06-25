from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/letters')
def letters():
    return render_template('letters.html')

@app.route('/plans')
def plans():
    return render_template('plans.html')

@app.route('/memories')
def memories():
    return render_template('memories.html')

if __name__ == '__main__':
    app.run(debug=True)
