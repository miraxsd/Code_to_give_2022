
from flask import Flask, current_app, g, request, jsonify
import bson

import spacy
import pymongo

app = Flask(__name__)

@app.route('/')
def hello():
    #db.posts.update_many({},{ '$set': {"etiquettes": []} })

    return 'Hello, World!'

@app.route('/api/posts',methods = ['POST'])
def get_posts():
    # Peut contenir la longitude et l'altitude (0 sinon), une liste des étiquettes à chercher (une liste vide sinon) 
    requested_posts_spec = request.get_json()
    location = requested_posts_spec.get('location')
    etiquettes = requested_posts_spec.get('etiquettes')
    # get posts from DB
    posts = db.posts.find({'location':location,'etiquettes':etiquettes})
    return posts

@app.route('/api/post/<int:id>',methods = ['GET'])
def get_post(id):
    post = db.posts.find_one({'_id'},id)
    return jsonify(post)


@app.route('/api/createpost',methods = ['POST'])
def create_post():
    # une liste des étiquettes à chercher (une liste vide sinon) 
    new_post = request.get_json()
    text = new_post.get('text')
    postType = new_post.get('postType')
    user = new_post.get('user')
    location = new_post.get('location')
    etiquettes = new_post.get('etiquettes')
    total_etiquettes = etiquettes + extract_keywords(text,'fr')

    post = {'user':user,'location':location,'etiquettes':total_etiquettes,'postType':postType,'comments':[],'numberOfLikes':0,'text':text}

    db.posts.insert_one(post)
    print(post);
    return 'post added'

@app.route('/api/create_comment',methods = ['POST'])
def create_comment():
    # Peut contenir la longitude et l'altitude (0 sinon), une liste des étiquettes à chercher (une liste vide sinon) 
    comment_infos = request.get_json()
    post_id = comment_infos.get_json('post_id')
    comment_writer = comment_infos.get_json('name')
    comment_text = comment_infos.get_json('text')
    numberOfLikes =comment_infos.get_json('numberOfLikes')

    db.posts.update_many({'_id':post_id}, 
        {
            '$push':{
                'comments': {
                    'user': comment_writer,
                    'comment': comment_text,
                    'numberOfLikes': numberOfLikes
                }

        }
    })

    return 'Hello, World!'

@app.route('/api/like_post',methods = ['POST'])
def like():
    post_id = request.get_json('id')
    db.posts.update_one({'_id':post_id},{ '$inc': { 'numberOfLikes': 1} })
    return 'likes_number increased'

@app.route('/api/unlike_post',methods = ['POST'])
def unlike():
    post_id = request.get_json('id')
    db.posts.update_one({'_id':post_id},{ '$inc': { 'numberOfLikes': -1} })
    return 'likes_number decreased'

#@app.route('/api/like_post',methods = ['POST'])
#def like():
#    post_id = request.get_json('id')
#    db.posts.
#    return likes_number

#@app.route('/api/unlike_post',methods = ['POST'])
#def unlike():
#    post_id = request.get_json('id')
#
#    return likes_number

@app.route('/api/test',methods = ['GET'])
def test():
    post_id = request.get_json('id')

    return db.posts.find_one({"_id":post_id})












# Source: https://towardsdatascience.com/keyword-extraction-process-in-python-with-natural-language-processing-nlp-d769a9069d5c
# Returns a tuple of keywords

def extract_keywords(text, language):
    if language == "en":
        nlp = spacy.load("en_core_web_sm") ## To choose the right loaded package for our case
    else:
        nlp = spacy.load("fr_core_news_sm")
    doc = nlp(text)
    return list(doc.ents)

if __name__ == "__main__":
    client = pymongo.MongoClient("mongodb+srv://Admin:admin@cluster0.ssnkw.mongodb.net/?retryWrites=true&w=majority", serverSelectionTimeoutMS=5000)
    db = client.CodeToGive
    try:
        print(client.server_info(),flush= True)
    except Exception:
        print("Unable to connect to the server.",flush= True)
    app.run(host="0.0.0.0",port=5000)