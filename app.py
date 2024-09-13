from flask import Flask, render_template, send_file
import qrcode
import io
import random

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/product/<int:product_id>')
def product(product_id):
    # Логика для отображения информации о товаре
    return render_template('product.html', product_id=product_id)


@app.route('/qr_payment')
def qr_payment():
    return render_template('qr_payment.html')


@app.route('/generate_qr')
def generate_qr():
    # Генерируем случайные данные для QR-кода (например, уникальный код платежа)
    random_data = f'payment:{random.randint(100000, 999999)}'

    # Создаем QR-код с данными
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(random_data)
    qr.make(fit=True)

    # Создаем изображение QR-кода
    img = qr.make_image(fill='black', back_color='white')

    # Сохраняем изображение в поток
    img_io = io.BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)

    # Возвращаем изображение QR-кода для отображения
    return send_file(img_io, mimetype='image/png')


@app.route('/payment')
def payment():
    return render_template('payment.html')


if __name__ == '__main__':
    app.run(debug=True)
