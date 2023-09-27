import os
import requests
import base64
import json

url = 'https://bwlwkhjj28.execute-api.ap-south-1.amazonaws.com/Production/predict-pneumonia'

path_img = "C:/Users/ragha/Downloads/val_pneumonia0.jpeg"

with open(path_img, 'rb') as f:
    data = f.read()

encoded_string = base64.b64encode(data)

decodedimage = base64.b64decode(encoded_string)

#print(buffer)
#print(decodedimage)
headers = {'Content-type': 'application/x-image'}
requestToAWS = requests.post(url, headers = headers, data=decodedimage)

respFromAWS = requestToAWS.json()
print("message:", respFromAWS)