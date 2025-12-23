from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('PaginaPrincipal.html') 

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/arteFans')
def arte_fans(): 
    return render_template('arteFans.html')

@app.route('/GuiasJefe')
def guias_jefe(): 
    return render_template('GuiasJefe.html')

@app.route('/HistoriaLore')
def historia_lore(): 
    return render_template('HistoriaLore.html')

@app.route('/noticias')
def noticias(): 
    return render_template('noticias.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)