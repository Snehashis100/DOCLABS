from flask import Flask, json, render_template, request, jsonify, make_response
import json
from flask_cors import CORS, cross_origin
import pickle
import numpy as np
import pandas as pd
import sklearn

# model=pd.read_pickle("C:\\Users\\Snehashis_Saheb\\Desktop\\Final Year Project\\Frontend\\doclab me\\DOCLABS\\covid19_model.pkl")
# covid_model = pickle.load(open("covid19_model.pkl", 'rb'))

liver_model=pickle.load(open("liver_model.pkl",'rb'))
liver_scaler=pickle.load(open("liver_scaler.pkl",'rb'))


# COVID19
def Covid_prediction(age, days_onset, sex_male, cough_yes, fever_yes, chills_yes, sore_throat_yes, headche_yes, fatigue_yes,
               country_others, model):
    tot_sym = [cough_yes, fever_yes, chills_yes, sore_throat_yes, headche_yes]
    t = tot_sym+[fatigue_yes]
    tot_symp = t.count(1)

    if country_others != 'china':
        country_oths = 1
    else:
        country_oths = 0

    if tot_sym.count(1) == 0:
        other_symp_yes = 0
    else:
        other_symp_yes = 1

    input_val = list(np.array([age, days_onset,tot_symp] +
                              tot_sym+[country_oths, other_symp_yes]).reshape(1, -1))

    result = model.predict(input_val)
    if result == 1:
        print("Low Chance")
    else:
        print("High Chance")

# LIVER DISEASE
def Transformation(value):
    if value!=0:
        return np.log(value)
    else:
        return value
    
def Liver_prediction(Age,Total_Bil,Direct_Bil,Alb,Alb_Glo_Ratio,Alk_Phosp,Alam_Amino,Asp_Amino,model,mms):
    a1=Transformation(Alk_Phosp)
    a2=Transformation(Alam_Amino)
    a3=Transformation(Asp_Amino)
    scaled_values=list(mms.transform(np.array([Age,Total_Bil,Direct_Bil,Alb,Alb_Glo_Ratio,a1,a2,a3]).reshape(1,-1)))
    threshold = 0.32
    predicted_proba = model.predict_proba(scaled_values)
    predicted = (predicted_proba [:,1] >= threshold).astype('int')
    if predicted==1:
        print("You have Liver Disease")
    else:
        print("You donot have Liver Disease")


application = Flask(__name__)
CORS(application, resources={r"*": {"origins": "*"}})

@application.route('/covid', methods=['GET', 'POST'])
@cross_origin()
def get_response_covid():

    if request.method == "GET":
        return "hello World"
    else:
        age = request.json['age']
        days_onset = request.json['days_onset']
        sex = request.json['sex']
        cough = request.json['cough']
        fever = request.json['fever']
        chills = request.json['chills']
        sore_throat = request.json['sore_throat']
        headache = request.json['headache']
        fatigue = request.json['fatigue']
        country_others = request.json['country_others'].lower()

        # do the processing
        Covid_prediction(age, days_onset, sex, cough, fever, chills, sore_throat, headache, fatigue,country_others, covid_model)

        return jsonify("Hello")


@application.route('/liver', methods=['GET', 'POST'])
@cross_origin()
def get_response_liver():

    if request.method == "GET":
        return "hello World"
    else:

        Age = request.json['Age']
        Total_Bil = request.json['Total_Bil']
        Direct_Bil = request.json['Direct_Bil']
        Alb = request.json['Alb']
        Alb_Glo_Ratio = request.json['Alb_Glo_Ratio']
        Alk_Phosp = request.json['Alk_Phosp']
        Alam_Amino = request.json['Alam_Amino']
        Asp_Amino = request.json['Asp_Amino']

        # do the processing
        Liver_prediction(Age,Total_Bil,Direct_Bil,Alb,Alb_Glo_Ratio,Alk_Phosp,Alam_Amino,Asp_Amino,liver_model,liver_scaler)

        return jsonify("Hello")