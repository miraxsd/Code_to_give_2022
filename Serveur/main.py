
from flask import Flask, current_app, g
import spacy
from mongoengine import *


app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'




# Source: https://towardsdatascience.com/keyword-extraction-process-in-python-with-natural-language-processing-nlp-d769a9069d5c
# Returns a tuple of keywords

def extract_keywords(text, language):
    if language == "en":
        nlp = spacy.load("en_core_web_sm") ## To choose the right loaded package for our case
    else:
        nlp = spacy.load("fr_core_news_sm")
    doc = nlp(text)
    return doc.ents

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000)
    connect(host="mongodb://Admin:Admin@cluster0.ssnkw.mongodb.net/?retryWrites=true&w=majority")
