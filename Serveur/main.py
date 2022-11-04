from flask import Flask
import spacy

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