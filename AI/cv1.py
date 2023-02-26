from flask import Flask, Response
import cv2

app = Flask(__name__)

@app.route('/vid')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

def generate_frames():
    cascade_classifier = cv2.CascadeClassifier('./haarcascade_fullbody.xml')

    human_count = 0

    cap = cv2.VideoCapture('./Video3.mov')

    while True:
        ret, frame = cap.read()

        if not ret:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        humans = cascade_classifier.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)

        for (x, y, w, h) in humans:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            human_count += 1
            human_count %= 6

        cv2.putText(frame, f"Human Count: {human_count}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        ret, jpeg = cv2.imencode('.jpg', frame)

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n'
               b'Content-Length: ' + bytes(len(jpeg)) + b'\r\n\r\n'
               + jpeg.tobytes() + b'\r\n')

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
