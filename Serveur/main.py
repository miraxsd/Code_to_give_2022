
from flask import Flask, current_app, g, request
import spacy
import pymongo

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/api/posts',methods = ['POST'])
def get_posts():
    # Peut contenir la longitude et l'altitude (0 sinon), une liste des étiquettes à chercher (une liste vide sinon) 
    requested_posts_spec = request.get_json()
    location = requested_posts_spec.get('location')
    longitude = location[0]
    altitude = location[1]
    etiquettes = requested_posts_spec.get('etiquettes')
    # get posts from DB
    return 'Hello, World!'

@app.route('/api/create_post',methods = ['POST'])
def create_post():
    # une liste des étiquettes à chercher (une liste vide sinon) 
    new_post = request.get_json()
    user = new_post.get('user')
    issue = new_post.get('issue')
    location = new_post.get('location')
    longitude = location[0]
    altitude = location[1]
    etiquettes = new_post.get('etiquettes')

    return 'Hello, World!'

@app.route('/api/create_comment',methods = ['POST'])
def create_comment():
    # Peut contenir la longitude et l'altitude (0 sinon), une liste des étiquettes à chercher (une liste vide sinon) 
    comment_infos = request.get_json()
    comment_writer = comment_infos.get_json('name')
    comment_text = comment_infos.get_json('text')

    return 'Hello, World!'

@app.route('/api/like',methods = ['POST'])
def like():
    post_id = request.get_json('id')

    return likes_number

@app.route('/api/unlike',methods = ['POST'])
def unlike():
    post_id = request.get_json('id')

    return likes_number

@app.route('/api/test',methods = ['GET'])
def test():
    post_id = request.get_json('id')

    return db.posts.find_one({"_id":post_id})


@app.route('/api/add_random_posts',methods = ['GET'])
def add_test():
    new_posts = [
    {
        'user':  "Bobby123",
        'location': [17.966958, -66.123551],
        'issue' :
        "Last month, a hurricane hit my city and destroyed everything. My family was lucky, and our house was not really damaged, but most of my friends’ houses are gone. The power just came back, but we still don’t have clean water and food is hard to find. I don’t know how to help my community.",
        'numberOfLikes': 110,
        'comments': [{
            'user': "juan908",
            'location': [17.934013, -76.456299],
            'comment':
            "I was in this situation last year, so I know it’s really hard. You can help by sharing some of your clothes and utilities with your friends who lost everything. Even if it’s just a couple of shirts, it will help a lot.",
            'numberOfLikes': 40
        }]
    },
    {
        'user' : "Maria514",
        'location': [45.569786, -73.585024],
        'issue':
        "There was a hurricane in my home country, and everything was destroyed. I want to help out, but I am so far away and I feel like I can’t do anything useful. Did someone ever live the same situation?",
        'numberOfLikes': 70,
        'comments': [{
            'user': "Michelle777",
            'location': [45.438565, -73.630295],
            'comment': "Hi Maria, I never had something like that happen to me before, but I think you should look into non-profit organization like Red Cross. I’m sure that there are charities that work in your home country could use donations to help more people.",
            'numberOfLikes': 32
        }]
    },
    {
        'user' : "Coco22",
        'location': [34.489809, 69.224768],
        'issue': "I can’t go to school because I am a girl. I was going to school before, and I really liked it. Now, with the new president, no girls can go to school. I feel sad because I am forced to stay home, and I can’t see my friends.",
        'numberOfLikes': 90,
        'comments': [{
            'user': "Marie90",
            'location' : [45.536941, -73.781572],
            'comment': "I think you should try to do school at home. Where I’m from, some people are homeschooled. Maybe you can do that, so you can still learn many things. You can also invite your friends at home to study together.",
            'numberOfLikes': 30
        },
        {
            'user': "Phillipe_r2",
            'location': [29.693139, -95.419678],
            'comment': "I don’t like school, so I think you’re lucky to get to stay home. You can just hang out with your friends at home.",
            'numberOfLikes': 10
        }]
    },
    {
        'user': "JeanPaul87",
        'location': [44.250831, -76.514525],
        'idea': "I think we should have a life skills class in school. Like they could teach us how to do taxes, how to make a budget, how to change a tire and more. That’s all basic stuff everyone should know, so I don’t understand why we don’t learn this in school.",
        'numberOfLikes': 102,
        'comments': [{
            'user': "Antonio45",
            'location': [44.784588, -68.853080],
            'comment': "I agree with you. I just graduated high school and yet I feel like I don’t know anything useful in day-to-day life. Sure, I know how to do algebra, but I can’t cook, I don’t know how to manage my money and I don’t understand how credit and loans work.",
            'numberOfLikes': 13
        },
        {
            'user': "Sonia_bts",
            'location': [45.497395, -73.734461],
            'comment': "In high school, I had an economic class where I learn how to manage money, fill out taxes, make a budget and even investing. I learned so much in this class, I still use my notes to this day. I think every school should offer a course like that.",
            'numberOfLikes': 16
        }]
    },
    {
        'user': "jonathan56",
        'location': [45.393278, -71.935539],
        'challenge': "I find it very difficult to concentrate when I’m studying. My parents want me to go to university, so I work very hard, but I am constantly distracted. Anytime I get a notification on my phone, I open it to check and usually spend the next hour on my phone just scrolling on social media. Does anyone have advice on how to concentrate better? Did this happen to anyone or I’m the only one?",
        'numberOfLikes': 1,
        'comments': []
    },
    {
        'user' : "Leon121",
        'location' : [45.519017, -73.576269],
        'idea' : "I think we should all use public transportation to travel instead of cars. I would be so much better for the environment. In the summer, we can just walk or use our bikes.",
        'numberOfLikes': 20,
        'comments': [{
            'user': "Laurie988",
            'location': [45.071439, -72.655342],
            'comment': "I think that’s a great idea if you like in a big city, but that’s not for everyone. I live outside a small city and I can’t do anything without a car. There’s no bus. If I wanna walk to any store it’s at least 45 minutes. Your idea is good, but we can’t do it everywhere.",
            'numberOfLikes': 15
        }]
    },
    {
        'user': "Fatima17",
        'location': [27.156734, -80.264194],
        'issue': "When I walk around in my community, I notice that there is a lot more trash on the ground or in the water. Like, this morning, I went on a walk by the beach, and there was more plastic then seashells. How can I encourage people to clean up after themselves? And how can we remove all the trash that’s coming with the ocean?",
        'numberOfLikes': 87,
        'comments': [{
            'user': "gilbert007",
            'location': [42.481240, -70.968762],
            'comment': "Hi Fatima17, I think there are robots that clean the ocean. Maybe you could convince people in your community to get one. These robots can remove a lot of the trash that’s floating around near the coast.",
            'numberOfLikes': 16
        }]     
    }]

    db.posts.insert_many(new_posts)
    return ''












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
    client = pymongo.MongoClient("mongodb+srv://Admin:admin@cluster0.ssnkw.mongodb.net/?retryWrites=true&w=majority", serverSelectionTimeoutMS=5000)
    db = client.CodeToGive
    try:
        print(client.server_info(),flush= True)
    except Exception:
        print("Unable to connect to the server.",flush= True)
    app.run(host="0.0.0.0",port=5000)