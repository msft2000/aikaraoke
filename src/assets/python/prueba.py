from flask import Flask, request, jsonify
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)

@app.route("/send-audio", methods=["POST"])
def obtener_numero():
    nombre = request.form.get("cancion")
    archivo = request.files['audio']
    archivo.save('./archivo.wav') 
    # audio_base64 = request.json.get("link")
    # Realiza cualquier procesamiento adicional con el enlace si es necesario
    
    # Devuelve el número 1 como respuesta
    respuesta = {
        "nota": "3",
        "similitud": "15%"
    }
    
    return jsonify(respuesta)

if __name__ == "__main__":
    # Configura el puerto en el que deseas que se ejecute el servidor
    puerto = 5000
    app.run(port=puerto)
