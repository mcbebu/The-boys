from flask import Flask, Response
import cv2

app = Flask(__name__)

@app.route('/vid')
def video_feed():
    # return Response(human_detector(), mimetype='multipart/x-mixed-replace; boundary=frame')
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

def generate_frames():
    # Load the full body cascade classifier
    cascade_classifier = cv2.CascadeClassifier('./haarcascade_fullbody.xml')

    # Initialize a counter for the number of detected humans
    human_count = 0

    # Load the input video
    cap = cv2.VideoCapture('./Video3.mov')

    while True:
        # Read the current frame
        ret, frame = cap.read()

        # If there are no more frames to read, break out of the loop
        if not ret:
            break

        # Convert the frame to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect humans in the grayscale image
        humans = cascade_classifier.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)

        # Draw rectangles around the detected humans
        for (x, y, w, h) in humans:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            human_count += 1
            human_count %= 6

        # Add the human count as a text overlay on the frame
        cv2.putText(frame, f"Human Count: {human_count}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        # Encode the processed frame as a JPEG image
        ret, jpeg = cv2.imencode('.jpg', frame)

        # Convert the JPEG image to bytes and yield it to the client
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n'
               b'Content-Length: ' + bytes(len(jpeg)) + b'\r\n\r\n'
               + jpeg.tobytes() + b'\r\n')

    # Release the capture and close the window
    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
