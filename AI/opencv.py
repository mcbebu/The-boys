from flask import Flask, Response
import cv2

app = Flask(__name__)

@app.route('/video_feed')
def video_feed():
    cap = cv2.VideoCapture('Video3.mov')

    def generate():
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            # Here you can perform any OpenCV processing on the frame
            # For example, convert to grayscale
            frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            # Encode the frame as a JPEG image
            ret, jpeg = cv2.imencode('.jpg', frame)
            # Convert the JPEG image to bytes and yield it to the client
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n')

    return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)
